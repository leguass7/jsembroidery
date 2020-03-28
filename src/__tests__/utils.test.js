import { isStr, isInstance, len, bytearray } from '../utils/py';

class Test {
  constructor() {
    return this;
  }
}

describe('py functions', () => {
  it('isStr', () => {
    expect(isStr('teste')).toBe(true);
  });

  it('isInstance', () => {
    const T = new Test();
    expect(isInstance(T, Test)).toBe(true);
  });

  it('len', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(len(arr)).toBe(5);
    expect(len('value')).toBe(5);
  });

  it('bytearray', () => {
    const arr = bytearray('teste');
    expect(JSON.stringify(arr)).toMatchSnapshot();
  });
});
