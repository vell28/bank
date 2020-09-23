import { PATHS_CONFIG } from 'containers/routing/utils';

export enum TEMPLATE {
  REGISTERED = 'blue',
  NONE = 'green',
  CANCELED = 'red',
}

interface IText<T> {
  [temp: string]: T;
}

interface ITemplateText {
  title: string;
  text1: string;
  text2: string;
  btn: string;
  link: string;
}

export const TEXT: IText<ITemplateText> = {
  blue: {
    title: 'Your request is under review…',
    text1: 'Your request was uploaded',
    text2: 'If processing your request takes more than one business day, contact support',
    btn: 'support',
    link: PATHS_CONFIG.signin.path,
  },
  green: {
    title: 'Congratulations!',
    text1: 'Your registration is successful!',
    text2: '',
    btn: '',
    link: PATHS_CONFIG.signin.path,
  },
  red: {
    title: 'Unfortunately, you are denied registration',
    text1:
      'We apologize, but when reviewing the documents you submitted, some inconsistencies were found with our conditions for providing banking services…',
    text2: '',
    btn: '',
    link: PATHS_CONFIG.signin.path,
  },
};
