var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    var firstInitial = firstName.charAt(0);
    return "".concat(firstInitial, ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe"));
