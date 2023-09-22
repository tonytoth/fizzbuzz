const isMultipleOfThree = (inputNumber: number) => inputNumber % 3 === 0;
const isMultipleOfFive = (inputNumber: number) => inputNumber % 5 === 0;

const fizzBuzz = (inputNumber: number) => {
  const isGreaterThan100 = inputNumber > 100;
  const isLowerThan1 = inputNumber < 1;

  if (isMultipleOfThree(inputNumber) && isMultipleOfFive(inputNumber)) {
    return 'FizzBuzz';
  }

  if (isMultipleOfThree(inputNumber)) {
    return 'Fizz';
  }

  if (isMultipleOfFive(inputNumber)) {
    return 'Buzz';
  }

  if (isGreaterThan100) {
    return 'Input has to be less then 100';
  }

  if (isLowerThan1) {
    return 'Input has to be greater then 1';
  }

  return inputNumber.toString();
};

export default fizzBuzz;
