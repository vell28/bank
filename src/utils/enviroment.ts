import { equals } from 'ramda';

const DEV_ENV = 'development';

// eslint-disable-next-line no-undef
export const isDevEnv = equals(process.env.NODE_ENV, DEV_ENV);
