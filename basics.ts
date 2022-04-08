let userName = "Jack";
let hasLoggedIn: boolean = true;

hasLoggedIn += "Herrington";

console.log(hasLoggedIn);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3];

interface Person {
  firstName: string;
  lastName: string;
}

const myPerson: Person = {
  firstName: "Jack",
  lastName: "Herrington",
};

/**
 * utility type
 * it allows to define object structure
 */
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

if (ids[30] === "d") {
  console.log("id 30 is d");
}

const out = [4, 5, 6].map((v) => `${v}`);
