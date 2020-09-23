import React from 'react';
import { equals } from 'ramda';

interface IStepProps {
  children: React.ReactNode;
  id: number;
}

interface IStepsProps {
  stepId: number;
  children: Array<React.ReactElement<IStepProps>>;
}

export const Step: React.FC<IStepProps> = React.memo(({ children }) => {
  return <>{children}</>;
});

// TODO: think about default step - step not found
export const Steps: React.FC<IStepsProps> = React.memo(({ stepId, children }) => {
  return (
    <>
      {children.map((item: React.ReactElement<IStepProps>) => {
        return equals(item.props.id, stepId) ? item : null;
      })}
    </>
  );
});
