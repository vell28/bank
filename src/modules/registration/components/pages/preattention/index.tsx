import React from 'react';

import { RegistrationVariantType, RegistrationVariantTypes } from '../../../models/registration/entities';
import { NextButton } from '../../common/next-button';
import { BoxDystrophic } from '../../page-box';
import {
  PageOuter, Center, Section, SectionHeader, NextButtonLine
} from '../../page-content';
import {
  LogoBox, List, ListItem, Paragraph, RegisterLater, Asterisk, LearnMore
} from './elements';
import passport from './passport.svg';

interface IPageProps {
  pageComplete: () => void;
  registrationVariant: RegistrationVariantType | null;
}

export const Preattention: React.FC<IPageProps> = ({ pageComplete, registrationVariant }) => {
  return (
    <PageOuter>
      <BoxDystrophic>
        <Center>
          <LogoBox>
            <img src={passport} alt="logo" />
          </LogoBox>
          <Section>
            <SectionHeader>
              During registration we may require the following to be uploaded
              <Asterisk>*</Asterisk>
              {' '}
              :
            </SectionHeader>
            <List>
              <ListItem>Your Selfie Photo</ListItem>
              <ListItem>
                Valid Government Issued ID Document Scan
                <LearnMore>learn more...</LearnMore>
              </ListItem>
              <ListItem>
                Proof of Residence Document Scan
                <LearnMore>learn more...</LearnMore>
              </ListItem>
              {registrationVariant === RegistrationVariantTypes.JURIDICAL && (
                <ListItem>Company registration documents</ListItem>
              )}
            </List>
          </Section>
          <Section>
            <SectionHeader>Please prepare documents mentioned above!</SectionHeader>
            <Paragraph>
              <Asterisk>*</Asterisk>
              {' '}
              there may also be rare situations where we would require you to upload additional
              documents.
            </Paragraph>
          </Section>
          <NextButtonLine>
            <NextButton onClick={pageComplete} arrow success>
              Start registration
            </NextButton>
          </NextButtonLine>
          <RegisterLater>Register later</RegisterLater>
        </Center>
      </BoxDystrophic>
    </PageOuter>
  );
};
