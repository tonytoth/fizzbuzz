import fizzBuzz from './index';

describe('FizzBuzz', () => {
  it('should return an error if the input is -1', () => {
    expect(fizzBuzz(-1)).toBe('Input has to be greater then 1');
  });

  it('should return an error if the input is greater than 100', () => {
    expect(fizzBuzz(101)).toBe('Input has to be less then 100');
  });

  it('should return Fizz if the input is 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('should return Fizz if the input is 6', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
  });

  it('should return Fizz if the input is 9', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  it('should return Buzz if the input is 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('should return Buzz if the input is 10', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it('should return Buzz if the input is 20', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  it('should return FizzBuzz if the input is 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('should return FizzBuzz if the input is 30', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  it('should return FizzBuzz if the input is 45', () => {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it('should return 1 if the input is "1"', () => {
    expect(fizzBuzz(1)).toBe('1');
  });

  it('should return 2 if the input is "2"', () => {
    expect(fizzBuzz(2)).toBe('2');
  });

  it('should return 4 if the input is "4"', () => {
    expect(fizzBuzz(4)).toBe('4');
  });
});
