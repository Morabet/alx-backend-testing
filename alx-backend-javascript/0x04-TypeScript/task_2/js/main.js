var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Wokr Director";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Work Teacher";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500)
        return new Teacher();
    return new Director();
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee))
        return employee.workDirectorTasks();
    return employee.workTeacherTasks();
}
function teachClass(todayClass) {
    if (todayClass === "Math")
        return "Teaching Math";
    if (todayClass === "History")
        return "Teaching History";
}
// console.log(createEmployee(200));
// console.log(isDirector(createEmployee(100)));
console.log(executeWork(createEmployee(200)));
console.log(teachClass("History"));
