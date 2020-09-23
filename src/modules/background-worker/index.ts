import { forEachObjIndexed } from 'ramda';
import {
  ITask, BackgroundTask, ITaskParams, ITaskResponse, taskState
} from './task';

interface ITaskMap {
  [key: number]: ITask;
}

interface IBackgroundWorker {
  createTask: (params: ITaskParams) => ITaskResponse;
  removeTask: (id: number) => ITaskResponse;
  forceTask: (id: number) => ITaskResponse;
  removeAllTask: () => void;
}

class BackgroundWorker implements IBackgroundWorker {
  private readonly tasks: ITaskMap = {};

  public createTask(params: ITaskParams) {
    const task = new BackgroundTask(params);
    const resp = task.start();
    this.tasks[resp.id] = task;
    return resp;
  }

  public removeTask(id: number) {
    const task = this.tasks[id];
    if (!task) {
      return this.createNotFoundError(id);
    }
    delete this.tasks[id];

    return task.remove();
  }

  public forceTask(id: number) {
    const task = this.tasks[id];
    if (!task) {
      return this.createNotFoundError(id);
    }
    return task.force();
  }

  public removeAllTask() {
    forEachObjIndexed((task: ITask) => {
      task.remove();
    }, this.tasks);
  }

  // eslint-disable-next-line class-methods-use-this
  private createNotFoundError(id: number): ITaskResponse {
    return {
      state: taskState.TERMINATED,
      id,
      executeCount: -1,
    };
  }
}

export default new BackgroundWorker();
