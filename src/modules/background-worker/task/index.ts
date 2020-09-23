import { defaultToEmptyString } from 'utils/ramda';

export type TaskStateType = 'RUNNING' | 'PAUSED' | 'TERMINATED' | 'INIT';

export const taskState: { [key: string]: TaskStateType } = {
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
  TERMINATED: 'TERMINATED',
  INIT: 'INIT',
};

export interface ITaskResponse {
  state: TaskStateType;
  id: number;
  executeCount: number;
}

export interface ITaskParams {
  task: (param: ITaskResponse) => void;
  onPause?: () => void;
  onEnd?: () => void;
  interval?: number;
  name?: string;
  isInterval?: boolean;
}

export interface ITask {
  start: () => ITaskResponse;
  remove: () => ITaskResponse;
  pause?: () => ITaskResponse;
  resume?: () => ITaskResponse;
  force: () => ITaskResponse;
}

export class BackgroundTask implements ITask {
  private id: number;

  private name: string;

  private params: ITaskParams;

  private state: TaskStateType;

  private executeCount = 0;

  constructor(params: ITaskParams) {
    this.params = params;
    this.id = -1;
    this.state = taskState.INIT;
    this.name = defaultToEmptyString(params.name);
  }

  public start() {
    const { task, interval, isInterval = true } = this.params;

    const executeFunc = isInterval ? setInterval : setTimeout;

    this.id = executeFunc(() => {
      task(this.status());
      this.executeCount += 1;
    }, interval);
    this.state = taskState.RUNNING;
    return this.status();
  }

  public remove() {
    const { isInterval = true } = this.params;

    const clear = isInterval ? clearInterval : clearTimeout;
    clear(this.id);
    this.state = taskState.TERMINATED;
    return this.status();
  }

  public force() {
    const { task } = this.params;
    task(this.status());
    this.executeCount += 1;
    return this.status();
  }

  private status(): ITaskResponse {
    return {
      id: this.id,
      state: this.state,
      executeCount: this.executeCount,
    };
  }
}
