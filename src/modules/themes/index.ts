import { IThemeColors, colorPalette } from './colorPalettes';
import {
  SMALL_VIEWPORT, MEDIUM_VIEWPORT, LARGE_VIEWPORT, MOBILE_VIWEPORT, fonts
} from './config';

export interface ITheme {
  name: string;
  colors: IThemeColors;
  dimension: object;
  size: string;
  breakpoints: string[];
  fonts: {
    faFontsPath: string;
    fontFamily: string;
  };
  typography: {
    bodyBackground: string;
    bodyFontColor: string;
    bodyFontFamily: string;

    globalFontSize: string;
    globalWeightNormal: number;
    globalLineHeight: number;

    headersFontColor: string;
    headersFontFamily: string;
    headersFontWeight: number;
  };
}

export const mainDarkTheme: ITheme = {
  name: 'main-dark-theme',
  colors: colorPalette,
  dimension: {},
  size: 'default',
  breakpoints: [`${MOBILE_VIWEPORT}px`, `${SMALL_VIEWPORT}px`, `${MEDIUM_VIEWPORT}px`, `${LARGE_VIEWPORT}px`],
  fonts,
  typography: {
    bodyBackground: colorPalette.darkBlue,
    bodyFontColor: colorPalette.white,
    bodyFontFamily: fonts.fontFamily,

    globalFontSize: '1.6rem',
    globalWeightNormal: 400,
    globalLineHeight: 1.5,

    headersFontColor: colorPalette.white,
    headersFontFamily: fonts.fontFamily,
    headersFontWeight: 700,
  },
};
