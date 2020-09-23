import React from 'react';

import { IHeader } from '../../models/registration/entities';
import { BackButton } from '../common/back-button';
import { CloseButton } from '../common/close-button';

import {
  BoxInner, BoxOuter, Left, Right, Middle, HeaderPrefix, HeaderTitle
} from './elements';

interface IProps {
  header: IHeader;
  back: () => void;
  close: () => void;
}

export const Head: React.FC<IProps> = ({ header, back, close }) => {
  const { prefix, title } = header;

  return (
    <BoxOuter>
      <BoxInner>
        <Left>{header.back !== false && <BackButton onClick={back}>Back</BackButton>}</Left>
        <Middle>
          {prefix && <HeaderPrefix>{prefix}</HeaderPrefix>}
          {title && <HeaderTitle>{title}</HeaderTitle>}
        </Middle>
        <Right>{header.close !== false && <CloseButton onClick={close}>Close</CloseButton>}</Right>
      </BoxInner>
    </BoxOuter>
  );
};
