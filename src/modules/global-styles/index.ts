import { createGlobalStyle } from 'styled-components';

// import { fontStyle } from './fonts';
import './css/swiper.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import 'flatpickr/dist/themes/material_green.css';
import './css/flatpickr.css';

import { typographyStyles } from './typography';

export const GlobalStyle = createGlobalStyle`
  /* typography styles */
  ${typographyStyles}
  body {}
  #root {
    min-height: 100%;
    height: auto;
  }
  #static {
    display: none;
  }
  input {
     ::placeholder { color: ${(props) => props.theme.colors.black}20; font-weight: normal; }
     :-ms-input-placeholder { color: ${(props) => props.theme.colors.black}20; font-weight: normal; }
     ::-ms-input-placeholder { color: ${(props) => props.theme.colors.black}20; font-weight: normal; }
  }
  select {
    border-radius: 0;
  }
  select {
    border-radius: 0;
  }
`;
