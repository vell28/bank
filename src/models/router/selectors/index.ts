import { RouterState } from 'connected-react-router';
import { pathOr } from 'ramda';

import { IStore } from 'modules/store/types';

export const getRouter = (state: IStore): RouterState => state.router;
export const getRouterPathname = (state: IStore): string => pathOr('', ['location', 'pathname'])(getRouter(state));
