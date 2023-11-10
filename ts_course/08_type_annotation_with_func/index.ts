let showMsg = true;

function showDetails(name: string, age: number, salary: number): string {
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, age is ${age} Salary is ${salary}, test is ${test}`;
  }
  return `No data`;
}

console.log(showDetails("Mahmoud", 22, 10000));
