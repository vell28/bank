import {
  auth, User, initializeApp, app
} from 'firebase/app';
import 'firebase/auth';
import { propOr } from 'ramda';

import { isDevEnv } from 'utils/enviroment';
import devConfig from './config/development.json';
import prodConfig from './config/production.json';

const config = isDevEnv ? devConfig : prodConfig;

const RECAPTCHA_CONTAINER_ID = 'recaptcha-container';
const RECAPTCHA_WRAPPER_ID = 'recaptcha-wrapper';

const ErrorCodes = {
  'auth/invalid-phone-number': 'Invalid phone number, please try again',
  'auth/invalid-verification-code': 'The SMS verification code used to create the phone auth credential is invalid.',
};

interface IRespError {
  code: string;
  message: string;
}

export class AuthFirebaseService {
  private recaptchaVerified?: auth.RecaptchaVerifier;

  private confirmationResult?: auth.ConfirmationResult;

  private firebase: app.App;

  constructor(options: object) {
    this.firebase = initializeApp(options);
    /*   if (isDevEnv) {
      this.firebase.auth().settings.appVerificationDisabledForTesting = true;
    } */
  }

  public getLoginCode(phoneNumber: string): Promise<string> {
    this.resetReCaptcha();

    this.recaptchaVerified = new auth.RecaptchaVerifier(RECAPTCHA_CONTAINER_ID, {
      size: 'invisible',
    });

    return this.firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, this.recaptchaVerified)
      .then((result: auth.ConfirmationResult) => {
        this.confirmationResult = result;
        return '';
      })
      .catch((e: IRespError) => {
        const message = propOr('SMS not sent', 'message')(e);
        return Promise.reject(propOr(message, e.code)(ErrorCodes));
      });
  }

  public async verifyCode(verificationCode: string): Promise<string> {
    if (!this.confirmationResult) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('Missing auth confirmation result');
    }

    return this.confirmationResult
      .confirm(verificationCode)
      .then((userCredential: auth.UserCredential) => {
        return (userCredential.user && userCredential.user.getIdToken()) || '';
      })
      .catch((e: IRespError) => {
        const message = propOr('Invalid confirm code', 'message')(e);
        return Promise.reject(propOr(message, e.code)(ErrorCodes));
      });
  }

  public async refreshToken() {
    const currentUser = this.getAuthState();
    if (currentUser) {
      return currentUser
        .getIdToken(true)
        .then((token: string) => {
          return token;
        })
        .catch((e: IRespError) => {
          const message = propOr('Can`t refresh firebase token', 'message')(e);
          return Promise.reject(propOr(message, e.code)(ErrorCodes));
        });
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('Can`t find firebase user');
  }

  public getAuthState(): User | null {
    return this.firebase.auth().currentUser;
  }

  public logout(): void {
    this.resetReCaptcha();
    this.firebase.auth().signOut();
  }

  public resetReCaptcha() {
    if (this.recaptchaVerified) {
      this.recaptchaVerified.clear();
      const wrapper = document.getElementById(RECAPTCHA_WRAPPER_ID);
      if (wrapper) {
        wrapper.innerHTML = `<div id="${RECAPTCHA_CONTAINER_ID}" style="display:none;"></div>`;
      }
    }
  }
}

export const firebaseAuth = new AuthFirebaseService(config);
