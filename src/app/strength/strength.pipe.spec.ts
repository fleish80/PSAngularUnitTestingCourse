import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it ('should display weak if strength is 5', () => {
    // arange
    const pipe = new StrengthPipe();

    // act
    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it ('should display strong if strength is 10', () => {
    // arange
    const pipe = new StrengthPipe();

    // act
    expect(pipe.transform(10)).toEqual('10 (strong)');
  });
});
