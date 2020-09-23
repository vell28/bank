import React from 'react';
import { ILinkProps } from './types';
import * as Styled from './elements';

export const Link: React.FC<ILinkProps> = ({ text, onClick }) => {
  return <Styled.Link onClick={onClick}>{text}</Styled.Link>;
};
