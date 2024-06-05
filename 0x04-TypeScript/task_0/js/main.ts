interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Khali",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();
const headers = ["First Name", "Location"];
headers.forEach(headerText => {
  const header = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});

const tableBody = table.createTBody();
studentsList.forEach(student => {
  const row = tableBody.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);
