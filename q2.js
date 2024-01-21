// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

printPersons(persons);

function printPersons(arrayOfPeople) {
  arrayOfPeople.forEach((element) => {
    const p = document.createElement("p");
    document.body.append(p);
    p.innerText = `${element.name}  ${element.age}`;
  });
}
