import { logout } from 'models/authorization/redux/actions';
import { appSessionExpired } from 'models/errors/redux/actions';
import worker from '../background-worker';
import { store } from '../store';

import { ITaskResponse } from '../background-worker/task';

const IDLE_LOGOUT_INTERVAL = 30 * 60 * 1000; // 30 minutes
const CHECK_LOGOUT_INTERVAL = 60 * 1000; // 1 minutes

export const idleLogout = () => {
  let prevEvent = Date.now();

  const updateTime = () => {
    prevEvent = Date.now();
  };

  if (document) {
    document.addEventListener('mouseover', updateTime);
    document.addEventListener('click', updateTime);
    document.addEventListener('keypress', updateTime);
  }

  const task = (status: ITaskResponse) => {
    const now = Date.now();
    if (now - prevEvent > IDLE_LOGOUT_INTERVAL) {
      if (document) {
        document.removeEventListener('mouseover', updateTime);
        document.removeEventListener('click', updateTime);
        document.removeEventListener('keypress', updateTime);
      }

      // eslint-disable-next-line no-console
      console.log('IDLE LOGOUT!!!');

      logout(store.dispatch);
      appSessionExpired(store.dispatch);
      worker.removeTask(status.id);
    }
  };

  return worker.createTask({
    task,
    interval: CHECK_LOGOUT_INTERVAL,
    name: 'Background task of idle user',
  });
};
