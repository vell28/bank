import { BackgroundTask, taskState } from '.';

describe('BackgroundTask tests', () => {
  test('should start/stop', () => {
    const task = jest.fn();
    const params = {
      task,
      interval: 0,
      name: 'test',
      isInterval: false,
    };
    const taskIns = new BackgroundTask(params);
    const startStatus = taskIns.start();
    expect(startStatus.state).toEqual(taskState.RUNNING);

    const removeStatus = taskIns.remove();
    expect(removeStatus.state).toEqual(taskState.TERMINATED);
  });
});
