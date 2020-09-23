import React, { useState } from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { PopupSelectCountry } from '@components/popup/popup-select-country';
import { ICardData } from 'models/operations/top-up/entities';
import { ICountry } from '@components/popup/popup-select-country/country-list';
import { NextBtnBox, TopUpNextBtn } from './elements';
import { CardForm } from '../common/card-form';
import { FieldsSwitcher } from './fields-switcher';

export interface ITopUpCardProps {
  title?: string;
  isHolder?: boolean;
  onSubmit?: (values: ICardData) => any;
  toggle?: () => void;
}

type Props = InjectedFormProps<ICardData> & ITopUpCardProps;

export const TopUpCardForm: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const [isShown, setShown] = useState(false);
  const [country, setCountry] = useState<ICountry>({});

  const toggle = () => setShown(!isShown);
  const onSetCountry = (newCountry: ICountry) => {
    setCountry(newCountry);
    toggle();
    props.change('country', newCountry.name);
  };

  const onFormSubmit = (values: ICardData) =>
    props.onSubmit
    && props.onSubmit({
      ...values,
      country: country.code,
    });
  const { handleSubmit, invalid } = props;

  return (
    <>
      <CardForm {...props} useCvv useDate />
      <FieldsSwitcher {...props} toggle={toggle} />
      <NextBtnBox>
        <TopUpNextBtn onClick={handleSubmit(onFormSubmit)} isDisabled={invalid}>
          {t('Next')}
        </TopUpNextBtn>
        <PopupSelectCountry
          isShown={isShown}
          onCancel={toggle}
          selectedCountry={country}
          onSelect={onSetCountry}
          showCode={false}
        />
      </NextBtnBox>
    </>
  );
};

export default reduxForm<ICardData, ITopUpCardProps>({
  form: 'TopUpCardForm',
})(TopUpCardForm);
