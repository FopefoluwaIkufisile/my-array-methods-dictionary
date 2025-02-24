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

// forEach
// testArr.forEach((name)=> console.log(`Hello, My name is ${name}`))
// Output: "Hello, My name is red"
// Output: "Hello, My name is blue"
// Output: "Hello, My name is yellow"
// Output: "Hello, My name is orange"
// Output: "Hello, My name is purple"
// Output: "Hello, My name is green"
// Output: "Hello, My name is indigo"

// testArrObject.forEach((person)=> console.log(`Hello, My name is ${person.name} and I'm ${person.age} years old.`))
// Output: "Hello, My name is David and I'm 25 years old."
// Output: "Hello, My name is Leo and I'm 30 years old."
// Output: "Hello, My name is James and I'm 20 years old."
// Output: "Hello, My name is Anthony and I'm 28 years old."
// Output: "Hello, My name is Mikayla and I'm 35 years old."
// Output: "Hello, My name is Anastacia and I'm 27 years old."
// Output: "Hello, My name is Hannah and I'm 26 years old."

// map
/* const mappedArr = testArr.map((name)=> 
    {return name;}
)
console.log(mappedArr)
// Output: ["red", "blue", "yellow", "orange", "purple", "green", "indigo"]

const mappedArrObject = testArrObject.map((name)=>{
    return `Hello, My name is ${name.name} and I'm ${name.age} years old.`
})
console.log(mappedArrObject)
// Output: ["Hello, My name is David and I'm 25 years old.",
//          "Hello, My name is Leo and I'm 30 years old.",
//          "Hello, My name is James and I'm 20 years old.",
//          "Hello, My name is Anthony and I'm 28 years old.",
//          "Hello, My name is Mikayla and I'm 35 years old.",
//          "Hello, My name is Anastacia and I'm 27 years old.",
//          "Hello, My name is Hannah and I'm 26 years old."]

*/

// filter
/* const filterred = testArr.filter((name)=>{
  return name.includes('o');
 })
 console.log(filterred)
// Output: ["yellow", "orange"]

 const filteredObject = testArrObject.filter((person)=>{
    return person.age === 30;
 })
 console.log(filteredObject)
// Output: [{name: "Leo", age: 30}]

 */

// concat
/* const combined = testArr.concat(secondTestArr);
 console.log(combined)
// Output: ["red", "blue", "yellow", "orange", "purple", "green", "indigo", "apple", "banana", "cherry", "date", "elderberry", "fig", "grape"]

 */

// find (like filter but returns the first one)
/*
 const filterred = testArr.find((name)=>{
  return name.includes('o');
 })
 console.log(filterred)
// Output: "yellow"

 const filteredObject = testArrObject.find((person)=>{
    return person.age > 20;
 })
 console.log(filteredObject)
// Output: {name: "David", age: 25}

 */

// findIndex (like find but returns the index)
/* const indexOf = testArr.findIndex((name)=> name.includes('u'));
 console.log(indexOf)
// Output: 4

 const indexOfObject = testArrObject.findIndex((person)=> person.age === 30);
 console.log(indexOfObject)
// Output: 1

 */

// indexOf (like findIndex but returns the index immediately(no condition needed))
/* const indexOf = testArr.indexOf('James');
 console.log(indexOf)
// Output: -1

 const indexOfObject = testArrObject.indexOf({name: "James", age: 20});
 console.log(indexOfObject)
// Output: -1

 */

// lastIndexOf (like indexOf but returns the last index immediately(no condition needed))
/* const lastIndexOf = testArr.lastIndexOf('James');
 console.log(lastIndexOf)
// Output: -1

 const lastIndexOfObject = testArrObject.lastIndexOf({name: "James", age: 20});
 console.log(lastIndexOfObject)
// Output: -1

 */

// some (returns true if at least one element passes the test)
/* const someTrue = testArr.some((name)=> name.includes('o'));
 console.log(someTrue)
// Output: true

 const someTrueObject = testArrObject.some((person)=> person.age > 20);
 console.log(someTrueObject)
// Output: true

 */

// every (returns true if all elements pass the test)
/* const everyTrue = testArr.every((name)=> name.includes('o'));
 console.log(everyTrue)
// Output: false

 const everyTrueObject = testArrObject.every((person)=> person.age > 20);
 console.log(everyTrueObject)
// Output: false

 */

// includes (returns true if an element exists in an array)
/*
  const includes = testArr.includes('James');
 console.log(includes)
// Output: false

 const includesObject = testArrObject.includes({name: "James", age: 20});
 console.log(includesObject)  
// Output: false
 */

// push (adds an element to the end of an array)
/*
  testArr.push('kiwi');
 console.log(testArr)
// Output: ["red", "blue", "yellow", "orange", "purple", "green", "indigo", "kiwi"]

 testArrObject.push({name: "kiwi", age: 26});
 console.log(testArrObject)
// Output: [{name: "David", age: 25}, {name: "Leo", age: 30}, {name: "James", age: 20}, 
//          {name: "Anthony", age: 28}, {name: "Mikayla", age: 35}, {name: "Anastacia", age: 27}, 
//          {name: "Hannah", age: 26}, {name: "kiwi", age: 26}]
 */

// unshift (adds an element to the beginning of an array)
/*
  testArr.unshift('mango');
 console.log(testArr)
// Output: ["mango", "red", "blue", "yellow", "orange", "purple", "green", "indigo"]

 testArrObject.unshift({name: "mango", age: 24});
 console.log(testArrObject)
// Output: [{name: "mango", age: 24}, {name: "David", age: 25}, {name: "Leo", age: 30}, 
//          {name: "James", age: 20}, {name: "Anthony", age: 28}, {name: "Mikayla", age: 35}, 
//          {name: "Anastacia", age: 27}, {name: "Hannah", age: 26}]
 */

// pop (removes the last element from an array and returns it)
/*
  const popped = testArr.pop();
 console.log(testArr, popped)
// Output: ["red", "blue", "yellow", "orange", "purple", "green", "indigo"], "kiwi"

 const poppedObject = testArrObject.pop();
 console.log(testArrObject, poppedObject)
// Output: [{name: "mango", age: 24}, {name: "David", age: 25}, {name: "Leo", age: 30}, 
//          {name: "James", age: 20}, {name: "Anthony", age: 28}, {name: "Mikayla", age: 35}, 
//          {name: "Anastacia", age: 27}, {name: "Hannah", age: 26}], {name: "kiwi", age: 26}

 */

// shift (removes the first element from an array and returns it)
/*
  const shifted = testArr.shift();
 console.log(testArr, shifted)
// Output: ["blue", "yellow", "orange", "purple", "green", "indigo"], "mango"

 const shiftedObject = testArrObject.shift();
 console.log(testArrObject, shiftedObject)
// Output: [{name: "David", age: 25}, {name: "Leo", age: 30}, {name: "James", age: 20}, 
//          {name: "Anthony", age: 28}, {name: "Mikayla", age: 35}, {name: "Anastacia", age: 27}, 
//          {name: "Hannah", age: 26}], {name: "mango", age: 24}
 */

// toString (returns a string representation of an array)
/* 
  const stringified = testArr.toString();
 console.log(stringified)
// Output: "blue,yellow,orange,purple,green,indigo"

 const stringifiedObject = testArrObject.toString();
 console.log(stringifiedObject)
// Output: "[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
 */

// join (joins all elements of an array into a string)
/* 
  const joined = testArr.join('-');
 console.log(joined)
// Output: "blue-yellow-orange-purple-green-indigo"

 const joinedObject = testArrObject.join(', ');
 console.log(joinedObject)
// Output: "[object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object]"
 */

// fill (fills all elements of an array with a static value)
/* 
  testArr.fill('grape');
 console.log(testArr)
// Output: ["grape", "grape", "grape", "grape", "grape", "grape", "grape"]

 testArrObject.fill({name: "grape", age: 27}, 1, 3);
 console.log(testArrObject)
// Output: [{name: "David", age: 25}, {name: "grape", age: 27}, {name: "grape", age: 27}, 
//          {name: "Anthony", age: 28}, {name: "Mikayla", age: 35}, {name: "Anastacia", age: 27}, 
//          {name: "Hannah", age: 26}]
 */

// copywith (creates a shallow copy of an array)
/* 
  const copied = testArr.copyWithin(0, 2, 4);
 console.log(testArr, copied)
// Output: ["yellow", "orange", "yellow", "orange", "purple", "green", "indigo"], ["yellow", "orange"]

 const copiedObject = testArrObject.copyWithin(0, 2, 4);
 console.log(testArrObject, copiedObject)
// Output: [{name: "James", age: 20}, {name: "Anthony", age: 28}, {name: "James", age: 20}, 
//          {name: "Anthony", age: 28}, {name: "Mikayla", age: 35}, {name: "Anastacia", age: 27}, 
//          {name: "Hannah", age: 26}], [{name: "James", age: 20}, {name: "Anthony", age: 28}]
 */

// slice (creates a shallow copy of a portion of an array)
/* 
  const sliced = testArr.slice(2, 4);
 console.log(testArr, sliced)
// Output: ["blue", "yellow", "orange", "purple", "green", "indigo"], ["yellow", "orange"]

 const slicedObject = testArrObject.slice(2, 4);
 console.log(testArrObject, slicedObject)
// Output: [{name: "David", age: 25}, {name: "Leo", age: 30}, {name: "James", age: 20}, 
//          {name: "Anthony", age: 28}, {name: "Mikayla", age: 35}, {name: "Anastacia", age: 27}, 
//          {name: "Hannah", age: 26}], [{name: "James", age: 20}, {name: "Anthony", age: 28}]
 */

// splice (removes elements from an array and, if necessary, inserts new elements in their place)
/* 
  testArr.splice(2, 1, 'kiwi', 'lemon');
 console.log(testArr)
// Output: ["red", "blue", "kiwi", "lemon", "orange", "purple", "green", "indigo"]

 testArrObject.splice(2, 1, {name: "kiwi", age: 26}, {name: "lemon", age: 27});
 console.log(testArrObject)
// Output: [{name: "David", age: 25}, {name: "Leo", age: 30}, {name: "kiwi", age: 26}, {name: "lemon", age: 27}, 
//          {name: "Anthony", age: 28}, {name: "Mikayla", age: 35}, {name: "Anastacia", age: 27}, 
//          {name: "Hannah", age: 26}]
 */

// sort (sorts the elements of an array in place and returns the array)
/* 
  testArr.sort();
 console.log(testArr)
// Output: ["blue", "green", "indigo", "orange", "purple", "red", "yellow"]

 testArrObject.sort((a, b) => a.age - b.age);
 console.log(testArrObject)
// Output: [{name: "James", age: 20}, {name: "David", age: 25}, {name: "Hannah", age: 26}, 
//          {name: "Anastacia", age: 27}, {name: "Anthony", age: 28}, {name: "Leo", age: 30}, 
//          {name: "Mikayla", age: 35}]
 */

// reverse (reverses the order of the elements of an array in place)
/* 
  testArr.reverse();
 console.log(testArr)
// Output: ["yellow", "red", "purple", "orange", "indigo", "green", "blue"]

 testArrObject.reverse();
 console.log(testArrObject)
// Output: [{name: "Hannah", age: 26}, {name: "Anastacia", age: 27}, {name: "Anthony", age: 28}, 
//          {name: "Leo", age: 30}, {name: "Mikayla", age: 35}, {name: "David", age: 25}, 
//          {name: "James", age: 20}]
 */

// from
/* 
  const from = Array.from(testArr);
 console.log(from)
// Output: ["red", "blue", "yellow", "orange", "purple", "green", "indigo"]

 const fromObject = Array.from(testArrObject);
 console.log(fromObject)
// Output: [{name: "David", age: 25}, {name: "Leo", age: 30}, {name: "James", age: 20}, 
//          {name: "Anthony", age: 28}, {name: "Mikayla", age: 35}, {name: "Anastacia", age: 27}, 
//          {name: "Hannah", age: 26}]
 */

// isArray (checks if an object is an array)
/*
  const isArray = Array.isArray(testArr);
 console.log(isArray)
// Output: true

 const isArrayObject = Array.isArray(testArrObject); 
 console.log(isArrayObject)
// Output: true
 */

// valueOf (returns the primitive value of an object)
/* 
  const valueOf = testArr.valueOf();
 console.log(valueOf)
// Output: ["red", "blue", "yellow", "orange", "purple", "green", "indigo"]

 const valueOfObject = testArrObject.valueOf();
 console.log(valueOfObject)
// Output: [{name: "David", age: 25}, {name: "Leo", age: 30}, {name: "James", age: 20}, 
//          {name: "Anthony", age: 28}, {name: "Mikayla", age: 35}, {name: "Anastacia", age: 27}, 
//          {name: "Hannah", age: 26}]
 */

// entries (returns a new Iterator object that contains the [key, value] pairs for each element in the array)
/*

  const entries = testArr.entries();
  for (const entry of entries) {
    console.log(entry);
  }
// Output: [0, "red"]
// Output: [1, "blue"]
// Output: [2, "yellow"]
// Output: [3, "orange"]
// Output: [4, "purple"]
// Output: [5, "green"]
// Output: [6, "indigo"]

  const entriesObject = testArrObject.entries();
  for (const entry of entriesObject) {
    console.log(entry);
  }
// Output: [0, {name: "David", age: 25}]
// Output: [1, {name: "Leo", age: 30}]
// Output: [2, {name: "James", age: 20}]
// Output: [3, {name: "Anthony", age: 28}]
// Output: [4, {name: "Mikayla", age: 35}]
// Output: [5, {name: "Anastacia", age: 27}]
// Output: [6, {name: "Hannah", age: 26}]

  */

// keys (returns a new Iterator object that contains the keys for each element in the array)
/* 
  const keys = testArr.keys();
  for (const key of keys) {
    console.log(key);
  }
// Output: 0
// Output: 1
// Output: 2
// Output: 3
// Output: 4
// Output: 5
// Output: 6
  
  const keysObject = testArrObject.keys();
  for (const key of keysObject) {
    console.log(key);
  }
// Output: 0
// Output: 1
// Output: 2
// Output: 3
// Output: 4
// Output: 5
// Output: 6

// The end of the code. */
