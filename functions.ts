
function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (stringOne: string, stringTwo: string = ""): string =>
  `${stringOne} ${stringTwo}`;

// introducing union type,
// any of type that are qualify are okay
export const format = (title: string, params: string | number) =>
  `${title} ${params}`;

export const formatFormat = (title: string, params: string | number): void => {
  console.log(format(title, params));
};

export const fetchData = (url: string): Promise<string> => {
  return Promise.resolve(`Data from ${url}`);
};

export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join()}`;
}

export function getName(user: { first: string; last: string }): string {
  return user.first + " " + user.last;
}
