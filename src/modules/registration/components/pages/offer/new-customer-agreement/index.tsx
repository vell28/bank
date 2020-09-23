import React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from '../../../common/link';
import { TitleBlock, DescriptionBlock, DescriptionLightBlock } from './elements';

import { IRegistrationOfferNavigationProps } from '../types';

export const NewCustomerAgreement: React.FC<IRegistrationOfferNavigationProps> = ({
  onPreContractalInformationClick,
  onGeneralTermsAndConditionsClick,
  onDataProtectionPolicyClick,
  onSecureUsageOfTheCardClick,
  onPriceListClick,
}) => {
  const { t } = useTranslation();
  const PreContractalInformation = (
    <Link onClick={onPreContractalInformationClick} text={t('Pre-contractual information')} />
  );
  const GeneralTermsAndConditions = (
    <Link onClick={onGeneralTermsAndConditionsClick} text={t('General terms and conditions')} />
  );
  const SecureUsageOfTheCard = (
    <Link onClick={onSecureUsageOfTheCardClick} text={t('Secure usage of the card and the APP')} />
  );
  const PriceList = <Link onClick={onPriceListClick} text={t('Price list')} />;
  const DataProtectionPolicy = <Link onClick={onDataProtectionPolicyClick} text={t('Data protection policy')} />;
  return (
    <>
      <TitleBlock>{t('Pre-contractual information')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t(
            'This document contains basic pre-contractual information (Pre-contractual information) on the services provided by us and how to conclude an agreement between you and us governing the possession and use of the prepaid Mastercard cards issued by us, and the Account opened by us.',
          )}
        </p>
        <p>
          {t(
            'Hereinafter "we", "us" or "our" means Papaya Ltd., registered with the Registrar of Companies in Malta, with registered office: 31 Sliema Road, Gzira GZR 1637, Malta, and registration no. C 55146. VAT No.: MT 2075 1731; Papaya’s head office is located at 31 Sliema Road, Gzira GZR 1637; electronic mail address - info@papaya.eu. Papaya Ltd is Electronic Money Institution (EMI), headquartered in Malta and regulated by the Malta Financial Services Authority (MFSA).',
          )}
        </p>
      </DescriptionBlock>
      <TitleBlock>{t('Agreement')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t('Your agreement with us (Agreement) consists of ')}
          {PreContractalInformation}
          {' , '}
          {GeneralTermsAndConditions}
          {' , '}
          {SecureUsageOfTheCard}
          {' , '}
          {PriceList}
          {t(' and ')}
          {DataProtectionPolicy}
          .
        </p>
        <p>
          {t(
            'The object of this Agreement is the opening and management of the Account, the possession and use of the Card and other Services.',
          )}
        </p>
        <p>
          {t('To conclude an agreement, you must read and accept this Pre-contractual information, ')}
          {GeneralTermsAndConditions}
          {' , '}
          {SecureUsageOfTheCard}
          {' , '}
          {PriceList}
          {' and apply for opening an account.'}
        </p>
        <p>
          {t(
            'By applying an account opening, you are submitting a binding application for the conclusion of Agreement for the provision described in it.',
          )}
        </p>
        <p>
          {t(
            'An agreement is concluded when we accept your application by setting up an Account for you and issuing prepaid Mastercard card – Black Cat Card.',
          )}
        </p>
      </DescriptionBlock>
      <TitleBlock>{t('Services')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t(
            'Services means services provided by us to you, including but not limited to Account management, issuing of payment instruments, execution of payment transactions (incl. payment transactions through a card), cash withdrawals from a payment account.',
          )}
        </p>
      </DescriptionBlock>
      <TitleBlock>{t('Account')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t(
            'Account means your card account established by us in your name. Account is used for the processing of transactions from linked card, as well as for execution of payment transactions. We will be able to support transactions in your Account 24 hours per day, 365 days per year.',
          )}
        </p>
      </DescriptionBlock>
      <TitleBlock>{t('Account opening')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t(
            'In order to open Account you must be an individual and at least 18 years old. You can open only one Account with us. The opening of multiple accounts is not permitted.',
          )}
        </p>
        <p>
          {t(
            'For fulfilling our obligations under the Prevention of Money Laundering and Funding of Terrorism Regulations we will ask you for information required to handle your application, to verify your identity, to perform “Know your customer” and to carry out customer due diligence measures.',
          )}
        </p>
      </DescriptionBlock>
      <TitleBlock>{t('Black Cat Card')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t(
            'The Black Cat Card (BCC) is a prepaid payment card issued to you by us, pursuant to license by Mastercard International Corporation. BCC is linked to your Account and provides you access to it.',
          )}
        </p>
        <p>
          {t(
            'BCC may be used to pay for goods and services at participating retailers and online that accept Mastercard cards. It is designed for use in shops and retail locations where you are physically present or for purchases online. It is possible also to use it for cash withdrawal.',
          )}
        </p>
        <p>{t('BCC can be issued as a virtual card. The virtual card is designed for online purchases only.')}</p>
      </DescriptionBlock>
      <TitleBlock>{t('Remote access tools')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t(
            'App is a mobile application that is a software installed on a device supporting the installation of software and allowing you to access your Account and use our Services.',
          )}
        </p>
        <p>
          {t(
            'Other remote access tool (for example, Internet Bank or web- solution) is a software ensured by us for remote execution of operations via the Internet.',
          )}
        </p>
        <p>
          {t(
            'Using the APP or another remote access tool you can apply electronically (remotely) for the opening of the account and manage your Account, which, in particular, make it possible to process transactions using the Card, as well as payment transactions.',
          )}
        </p>
      </DescriptionBlock>
      <TitleBlock>{t('Password, PIN and CVV')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t(
            'A password is a code consisting of Arabic figures and/or letters of the Latin alphabet that you have applied for and that denotes you. It is one of necessary authorization tools to access your Account and use our Services.',
          )}
        </p>
        <p>
          {t(
            'Personal Identification Number (PIN) issued by us to you together with BCC. The PIN-code is only known to you and considered equal to your signature for transaction certification.',
          )}
        </p>
        <p>
          {t(
            'The Card Verification Value (CVV) code is a security feature of the card consisting of 3 digits and is located on the back of the card within the signature area.',
          )}
        </p>
        <p>
          {t(
            'PIN and CVV are additional security measures for BCC. You are responsible for keeping password, PIN and CVV confidential. We ask you not to share this information with anyone.',
          )}
        </p>
      </DescriptionBlock>
      <TitleBlock>{t('How to use BCC')}</TitleBlock>
      <DescriptionBlock>
        <p>{t('BCC may only be used by the person to whom it was issued.')}</p>
        <p>
          {t(
            'BCC is not a cheque guarantee card, charge card or credit card, nor may it be used as evidence of identity.',
          )}
        </p>
        <p>
          {t(
            'We expect that your BCC will not be used in an unauthorized or fraudulent manner. You are responsible for keeping your BCC and their details safe.',
          )}
        </p>
      </DescriptionBlock>
      <TitleBlock>{t('Managing your account')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t(
            'You may check the balance and available funds on your Account or access to an Account statement by the App or other remote access tool.',
          )}
        </p>
        <p>
          {t(
            'You must ensure that you have sufficient available funds on your Account to pay for each purchase, payment or cash withdrawal using BCC.',
          )}
        </p>
        <p>
          {t(
            'Account may only be loaded by: – payment in cash to us in our main office in Malta, or – payment to the Account from your account opened in other payment provider/ bank.',
          )}
        </p>
        <p>{t('You will not earn any interest on any funds loaded on your Account.')}</p>
      </DescriptionBlock>
      <TitleBlock>{t('Fees and charges')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t('Fees and charges payable under this Agreement are available in')}
          {PriceList}
        </p>
      </DescriptionBlock>
      <TitleBlock>{t('Cancellation period')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t(
            'You are entitled to a 14-day cancellation period from the commencement date during which you may cancel the Agreement without incurring any penalty and without having to give any reason.',
          )}
        </p>
        <p>
          {t('Note that you will not be entitled to a refund of any fees stated in ')}
          {PriceList}
          {t(' , if you have used your Card during this 14-day cancellation period.')}
        </p>
      </DescriptionBlock>
      <TitleBlock>{t('Personal data protection')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t(
            'We collect, use and processing personal information related to you or persons connected to you in accordance with ',
          )}
          {PriceList}
          .
        </p>
      </DescriptionBlock>
      <TitleBlock>{t('Applicable Legal Enactments')}</TitleBlock>
      <DescriptionBlock>
        <p>{t('The laws of the Republic of Malta apply to the Agreement.')}</p>
      </DescriptionBlock>
      <TitleBlock>{t('Safeguarding Requirements')}</TitleBlock>
      <DescriptionBlock>
        <p>
          {t(
            'The Malta Depositor Compensation Scheme does not apply to your Account and BCC. But we take the security of your money very seriously. We shall safeguard all funds received from you.',
          )}
        </p>
        <p>
          {t(
            'Such funds shall be deposited in a separate bank account in a credit institution domiciled in a reputable jurisdiction. So in the unlikely event of any insolvency, funds that have reached your Account will be protected against claims by creditors.',
          )}
        </p>
      </DescriptionBlock>
      <DescriptionLightBlock>
        <p>
          {t('See ')}
          {GeneralTermsAndConditions}
          {t(' and ')}
          {PriceList}
          {t(' for more information about the costs, terms and conditions. ')}
          {t('See ')}
          {SecureUsageOfTheCard}
          {t(' for more information about secure using of your BCC and the remote access tool.')}
        </p>
      </DescriptionLightBlock>
    </>
  );
};
