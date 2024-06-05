interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));
