import reducer from './reducer';

describe('Application Reducer', () => {
  it('thows an error with an unsupported type', () => {
    expect(() => reducer({}, { type: null })).toThrowError(
      /Tried to reduce with unsupported action type/i
    );
  });
});