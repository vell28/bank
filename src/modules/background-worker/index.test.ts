import worker from '.';
import { taskState } from './task';

describe('worker tests', () => {
  test('should create/remove', () => {
    const task = jest.fn();
    const params = {
      task,
      interval: 200,
      name: 'test',
      isInterval: true,
    };
    const created = worker.createTask(params);
    expect(created.state).toEqual(taskState.RUNNING);

    const taskResp = worker.removeTask(created.id);
    expect(taskResp.state).toEqual(taskState.TERMINATED);
  });

  test('force task if id is not exist, should remove all', () => {
    const task = jest.fn();
    const params = {
      task,
      interval: 200,
      name: 'test',
      isInterval: true,
    };
    const created1 = worker.createTask(params);
    expect(created1.state).toEqual(taskState.RUNNING);

    const created2 = worker.createTask(params);
    expect(created2.state).toEqual(taskState.RUNNING);

    const forcedNotExisted = worker.forceTask(-1);
    expect(forcedNotExisted.state).toEqual(taskState.TERMINATED);

    worker.removeAllTask();

    expect(worker.forceTask(created1.id).state).toEqual(taskState.TERMINATED);
    expect(worker.forceTask(created2.id).state).toEqual(taskState.TERMINATED);
  });
});
