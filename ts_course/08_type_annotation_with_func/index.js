var showMsg = true;
function showDetails(name, age, salary) {
    var test = 10;
    if (showMsg) {
        return "Hello ".concat(name, ", age is ").concat(age, " Salary is ").concat(salary, ", test is ").concat(test);
    }
    return "No data";
}
console.log(showDetails("Mahmoud", 22, 10000));
