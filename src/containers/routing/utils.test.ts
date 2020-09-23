import { getActiveIndex, mainMenuPaths, getRouteParamByName } from './utils';

describe('routing utils tests', () => {
  test('getActiveIndex should return matched path index', () => {
    const checkIndex = 4;
    const testPath = mainMenuPaths[checkIndex].path;
    const index = getActiveIndex(testPath, mainMenuPaths);
    expect(index).toBe(checkIndex);
    const profilePath = '/profile';
    const profileIndex = getActiveIndex(profilePath, mainMenuPaths);
    expect(profileIndex > 0).toBeTruthy();
    expect(profileIndex < mainMenuPaths.length).toBeTruthy();
  });

  test('getActiveIndex should return 0 if path is not exist', () => {
    const notExistedPath = '/another/123';
    const index = getActiveIndex(notExistedPath, mainMenuPaths);
    expect(index).toEqual(0);
  });

  test('getRouteParamByName should return param by name', () => {
    const routing: any = {
      match: {
        params: {
          id: 'test',
        },
      },
    };
    const index = getRouteParamByName('id', routing);
    expect(index).toEqual('test');
  });
});
