# 📚 Array Methods in `main.js` 📚

Welcome to the **Array Methods Showcase**! This project demonstrates a variety of powerful and commonly used JavaScript array methods, all implemented in the `main.js` file. Whether you're a beginner or an advanced developer, this file serves as a practical guide with clear examples.

---

## 📝 Overview

The `main.js` file includes a series of JavaScript array methods, each explained with concise examples. From simple operations like `.push()` to more complex ones like `.reduce()`, you'll find demonstrations of common methods to manipulate and interact with arrays.

---

## 🔧 Array Methods Demonstrated

### Example Code in `main.js`:

```javascript
const testArr = [
  "red",
  "blue",
  "yellow",
  "orange",
  "purple",
  "green",
  "indigo",
];
const secondTestArr = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];
const testArrObject = [
  { name: "David", age: 25 },
  { name: "Leo", age: 30 },
  { name: "James", age: 20 },
  { name: "Anthony", age: 28 },
  { name: "Mikayla", age: 35 },
  { name: "Anastacia", age: 27 },
  { name: "Hannah", age: 26 },
];

// forEach Example
testArr.forEach((name) => console.log(`Hello, My name is ${name}`));
testArrObject.forEach((person) =>
  console.log(
    `Hello, My name is ${person.name} and I'm ${person.age} years old.`
  )
);

// map Example
const mappedArr = testArr.map((name) => {
  return name;
});
console.log(mappedArr);

const mappedArrObject = testArrObject.map((name) => {
  return `Hello, My name is ${name.name} and I'm ${name.age} years old.`;
});
console.log(mappedArrObject);

// filter Example
const filtered = testArr.filter((name) => {
  return name.includes("o");
});
console.log(filtered);

const filteredObject = testArrObject.filter((person) => {
  return person.age === 30;
});
console.log(filteredObject);

// concat Example
const combined = testArr.concat(secondTestArr);
console.log(combined);

// find Example
const found = testArr.find((name) => {
  return name.includes("o");
});
console.log(found);

const foundObject = testArrObject.find((person) => {
  return person.age > 20;
});
console.log(foundObject);

// findIndex Example
const indexOf = testArr.findIndex((name) => name.includes("u"));
console.log(indexOf);

const indexOfObject = testArrObject.findIndex((person) => person.age === 30);
console.log(indexOfObject);

// indexOf Example
const indexOf = testArr.indexOf("pius");
console.log(indexOf);

const indexOfObject = testArrObject.indexOf({ name: "fope", age: 25 });
console.log(indexOfObject);

// lastIndexOf Example
const lastIndexOf = testArr.lastIndexOf("pius");
console.log(lastIndexOf);

const lastIndexOfObject = testArrObject.lastIndexOf({ name: "fope", age: 25 });
console.log(lastIndexOfObject);

// some Example
const someTrue = testArr.some((name) => name.includes("o"));
console.log(someTrue);

const someTrueObject = testArrObject.some((person) => person.age > 20);
console.log(someTrueObject);

// every Example
const everyTrue = testArr.every((name) => name.includes("o"));
console.log(everyTrue);

const everyTrueObject = testArrObject.every((person) => person.age > 20);
console.log(everyTrueObject);

// includes Example
const includes = testArr.includes("pius");
console.log(includes);

const includesObject = testArrObject.includes({ name: "fope", age: 25 });
console.log(includesObject); // false because objects are not equal, but they have the same properties.

// push Example
testArr.push("kiwi");
console.log(testArr);

testArrObject.push({ name: "kiwi", age: 26 });
console.log(testArrObject);

// unshift Example
testArr.unshift("mango");
console.log(testArr);

testArrObject.unshift({ name: "mango", age: 24 });
console.log(testArrObject);

// pop Example
const popped = testArr.pop();
console.log(testArr, popped);

const poppedObject = testArrObject.pop();
console.log(testArrObject, poppedObject);

// shift Example
const shifted = testArr.shift();
console.log(testArr, shifted);

const shiftedObject = testArrObject.shift();
console.log(testArrObject, shiftedObject);

// toString Example
const stringified = testArr.toString();
console.log(stringified);

const stringifiedObject = testArrObject.toString();
console.log(stringifiedObject);

// join Example
const joined = testArr.join("-");
console.log(joined);

const joinedObject = testArrObject.join(", ");
console.log(joinedObject);

// fill Example
testArr.fill("grape");
console.log(testArr);

testArrObject.fill({ name: "grape", age: 27 }, 1, 3);
console.log(testArrObject);

// copyWithin Example
const copied = testArr.copyWithin(0, 2, 4);
console.log(testArr, copied);

const copiedObject = testArrObject.copyWithin(0, 2, 4);
console.log(testArrObject, copiedObject);

// slice Example
const sliced = testArr.slice(2, 4);
console.log(testArr, sliced);

const slicedObject = testArrObject.slice(2, 4);
console.log(testArrObject, slicedObject);

// splice Example
testArr.splice(2, 1, "kiwi", "lemon");
console.log(testArr);

testArrObject.splice(
  2,
  1,
  { name: "kiwi", age: 26 },
  { name: "lemon", age: 27 }
);
console.log(testArrObject);

// sort Example
testArr.sort();
console.log(testArr);

testArrObject.sort((a, b) => a.age - b.age);
console.log(testArrObject);

// reverse Example
testArr.reverse();
console.log(testArr);

testArrObject.reverse();
console.log(testArrObject);

// from Example
const from = Array.from(testArr);
console.log(from);

const fromObject = Array.from(testArrObject);
console.log(fromObject);

// isArray Example
const isArray = Array.isArray(testArr);
console.log(isArray);

const isArrayObject = Array.isArray(testArrObject);
console.log(isArrayObject);

// valueOf Example
const valueOf = testArr.valueOf();
console.log(valueOf);

const valueOfObject = testArrObject.valueOf();
console.log(valueOfObject);

// entries Example
const entries = testArr.entries();
for (const entry of entries) {
  console.log(entry);
}

const entriesObject = testArrObject.entries();
for (const entry of entriesObject) {
  console.log(entry);
}

// keys Example
const keys = testArr.keys();
for (const key of keys) {
  console.log(key);
}

const keysObject = testArrObject.keys();
for (const key of keysObject) {
  console.log(key);
}

// values Example
const values = testArr.values();
for (const value of values) {
  console.log(value);
}

const valuesObject = testArrObject.values();
for (const value of valuesObject) {
  console.log(value);
}
```

## 🚀 How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/array-methods.git
2. Open main.js in a code editor.
3. Run the code in a JavaScript environment, such as Node.js or a browser's console.
4. The provided code demonstrates various array methods and their usage.

