export const windowMock = (overrides: any = {}) => {
  const mock = {
    matchMedia: jest.fn().mockReturnValue({ matches: true }),
    innerWidth: 420,
    ...overrides,
  };

  global.window.matchMedia = jest.fn().mockReturnValue({ matches: true });
  global.window.innerWidth = mock.innerWidth;

  return mock;
};
