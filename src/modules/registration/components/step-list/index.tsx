import React from 'react';

import { RegistrationCurrentVariantStepsType } from '../../models/registration/entities';

import {
  BoxInner, BoxOuter, Step, ActiveStep, CompletedStep
} from './elements';

interface IProps {
  steps: RegistrationCurrentVariantStepsType;
}

export const StepList: React.FC<IProps> = ({ steps }) => (
  <BoxOuter>
    <BoxInner>
      {steps.map((step) => {
        return step.current ? (
          <ActiveStep key={step.path}>{step.name}</ActiveStep>
        ) : step.completed ? (
          <CompletedStep key={step.path}>{step.name}</CompletedStep>
        ) : (
          <Step key={step.path}>{step.name}</Step>
        );
      })}
    </BoxInner>
  </BoxOuter>
);
