import { Test } from './index';

describe('index', () => {
  it('succeeds', () => {
    const input = 1;
    const response = Test.test(input);
    expect(response).toBe(input);
  });
});
