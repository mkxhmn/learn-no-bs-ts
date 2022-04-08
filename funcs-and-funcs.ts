export function printToFile(text: string, callback: () => void): void {
  callback();
  console.log(text);
}

// function as type
type MutationFunction = (v: number) => number;

export function arrayMutate(number: number[], mutate: MutationFunction) {
  return number.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

export function createAdder(number: number): (value: number) => number {
  return (value: number) => number + value;
}

// or for createAdder, we can write it like this
export const createAdderArrow = (number: number) => (value: number) =>
  number + value;

const addOne = createAdder(1);
console.log(addOne(55));

const addTwo = createAdderArrow(2);
console.log(addTwo(55));
