import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { REGISTRATION_STEPS as STEPS } from '../../models/registration/entities/const';
import { BoxOuter, BoxInner } from '../page-box';

/* Pages */
import AccountVariant from '../../containers/pages/account-variant';
import Offer from '../../containers/pages/offer';
import Preattention from '../../containers/pages/preattention';
import PhoneNumber from '../../containers/pages/physical/phone-number';
import PersonalIdentification from '../../containers/pages/physical/personal-identification';
import BasicPersonalData from '../../containers/pages/physical/basic-personal-data';
import PersonalAddress from '../../containers/pages/physical/personal-address';
import Identity from '../../containers/pages/physical/identity';
import Additional from '../../containers/pages/physical/additional';
import AdditionalConfirm from '../../containers/pages/physical/additional-confirm';
import { UploadingPage } from '../../components/pages/physical/uploading';
import ProxyUpload from '../../containers/pages/juridical/proxy-upload';
import CompanyType from '../../containers/pages/juridical/company-type';
import Actitivies from '../../containers/pages/juridical/activities';
import BasicCompanyData from '../../containers/pages/juridical/basic-company-data';
import CompanyAddress from '../../containers/pages/juridical/company-address';
import BearerShares from '../../containers/pages/juridical/bearer-shares';
import Owners from '../../containers/pages/juridical/owners';
import Directors from '../../containers/pages/juridical/directors';
import Documents from '../../containers/pages/juridical/documents';
import Congratulations from '../../containers/pages/congratulations';
import LoginStatus from '../../containers/pages/login-status';
import RegistrationStatus from '../../containers/pages/registration-status';
import { commonPage } from './common-page';
import { standalonePage } from './standalone-page';

interface IRegistrationProps {
  redirect: string | null;
}

export const Registration: React.FC<IRegistrationProps> = ({ redirect }) => {
  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <BoxOuter>
      <BoxInner>
        <Switch>
          <Route path={STEPS.accountVariant.path} render={standalonePage(AccountVariant)} exact />
          <Route path={STEPS.loginStatus.path} render={standalonePage(LoginStatus)} exact />
          <Route path={STEPS.registrationStatus.path} render={standalonePage(RegistrationStatus, true)} exact />
          <Route path={STEPS.offer.path} render={standalonePage(Offer)} exact />
          <Route path={STEPS.preattention.path} render={standalonePage(Preattention)} exact />
          <Route path={STEPS.phoneNumber.path} render={commonPage(PhoneNumber)} exact />
          <Route path={STEPS.personalIdentification.path} render={commonPage(PersonalIdentification)} exact />
          <Route path={STEPS.basicPersonalData.path} render={commonPage(BasicPersonalData)} exact />
          <Route path={STEPS.personalAddress.path} render={commonPage(PersonalAddress)} exact />
          <Route path={STEPS.identity.path} render={commonPage(Identity)} exact />
          <Route path={STEPS.additional.path} render={commonPage(Additional)} exact />
          <Route path={STEPS.additionalConfirm.path} render={standalonePage(AdditionalConfirm)} exact />
          <Route path={STEPS.uploading.path} render={standalonePage(UploadingPage, true)} exact />
          <Route path={STEPS.proxyUpload.path} render={commonPage(ProxyUpload)} exact />
          <Route path={STEPS.companyType.path} render={commonPage(CompanyType)} exact />
          <Route path={STEPS.activities.path} render={commonPage(Actitivies)} exact />
          <Route path={STEPS.basicCompanyData.path} render={commonPage(BasicCompanyData)} exact />
          <Route path={STEPS.companyAddress.path} render={commonPage(CompanyAddress)} exact />
          <Route path={STEPS.bearerShares.path} render={commonPage(BearerShares)} exact />
          <Route path={STEPS.owners.path} render={commonPage(Owners)} exact />
          <Route path={STEPS.directors.path} render={commonPage(Directors)} exact />
          <Route path={STEPS.documents.path} render={commonPage(Documents)} exact />
          <Route path={STEPS.congratulations.path} render={standalonePage(Congratulations)} exact />
        </Switch>
      </BoxInner>
    </BoxOuter>
  );
};
