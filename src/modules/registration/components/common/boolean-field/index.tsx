import React from 'react';
import { Field, WrappedFieldProps, BaseFieldProps } from 'redux-form';

import { useTranslation } from 'react-i18next';
import {
  BooleanFieldContainer,
  LabelContainer,
  CheckBoxContainer,
  CheckBoxInput,
  CheckBoxSpan,
  SliderContainer,
  SliderInput,
  SliderSpan,
  Error,
} from './elements';

// wanta add label - add it as a child
export interface IBooleanFieldProps extends BaseFieldProps {
  name: string;
  isSlider: boolean;
  labelFirst?: boolean;
}

const CheckBox: React.FC<WrappedFieldProps> = ({ input: reduxFormProps, meta, ...inputProps }) => {
  const { t } = useTranslation();
  const { error, touched } = meta;
  return (
    <CheckBoxContainer>
      <CheckBoxInput type="checkbox" {...reduxFormProps} {...inputProps} />
      <CheckBoxSpan className="checkmark" />
      {touched && error && <Error top={-6}>{t(error)}</Error>}
    </CheckBoxContainer>
  );
};

const Slider: React.FC<WrappedFieldProps> = ({ input: reduxFormProps, meta, ...inputProps }) => {
  const { t } = useTranslation();
  const { error, touched } = meta;
  return (
    <SliderContainer>
      <SliderInput type="checkbox" {...reduxFormProps} {...inputProps} />
      <SliderSpan />
      {touched && error && <Error top={-6}>{t(error)}</Error>}
    </SliderContainer>
  );
};

export const BooleanField: React.FC<IBooleanFieldProps> = ({
  name, isSlider, children, labelFirst, validate
}) => {
  const InnerInput = isSlider ? Slider : CheckBox;
  return (
    <BooleanFieldContainer>
      {labelFirst && <LabelContainer>{children}</LabelContainer>}
      <Field name={name} component={InnerInput} type="checkbox" validate={validate} />
      {!labelFirst && <LabelContainer>{children}</LabelContainer>}
    </BooleanFieldContainer>
  );
};
