const returnTypeArrow = <t>(val: t): t => val;

console.log(returnTypeArrow<number>(5));
console.log(returnTypeArrow<number[]>([1, 3, 5, 6]));

function testType<T>(val: T): string {
  return `the value is ${val} and the type is ${typeof val}`;
}

console.log(testType<number>(100));
console.log(testType<string>("mahmoud"));

const multiTypes = <T, S>(valOne: T, valTwo: S): string =>
  `the value one is ${valOne} and value two is ${valTwo}`;

console.log(multiTypes<number, string>(100, "mahmoud"));
console.log(multiTypes<number[],string[]>([1,2,4,5],["a","m","o","r"]));


