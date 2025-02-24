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

//  testArrObject.forEach((person)=> console.log(`Hello, My name is ${person.name} and I'm ${person.age} years old.`))

//map

/* const mappedArr = testArr.map((name)=> 
    {return name;}
)
 console.log(mappedArr)

 const mappedArrObject = testArrObject.map((name)=>{
     return `Hello, My name is ${name.name} and I'm ${name.age} years old.`
 })
 console.log(mappedArrObject)

 */

//filter

/* const filterred = testArr.filter((name)=>{
  return name.includes('o');
 })
 console.log(filterred)

 const filteredObject = testArrObject.filter((person)=>{
    return person.age === 30;
 })
 console.log(filteredObject)

 */

//concat

/* const combined = testArr.concat(secondTestArr);
 console.log(combined)

 */

//find (like filter but retruns the first one)

/*
 const filterred = testArr.find((name)=>{
  return name.includes('o');
 })
 console.log(filterred)

 const filteredObject = testArrObject.find((person)=>{
    return person.age > 20;
 })
 console.log(filteredObject)

 */

//findIndex (like find but retruns the index)

/* const indexOf = testArr.findIndex((name)=> name.includes('u'));
 console.log(indexOf)

 const indexOfObject = testArrObject.findIndex((person)=> person.age === 30);
 console.log(indexOfObject)

 */

//indexOf (like findIndex but returns the index immediately(no condition needed))

/* const indexOf = testArr.indexOf('pius');
 console.log(indexOf)

 const indexOfObject = testArrObject.indexOf({name: "fope", age: 25});
 console.log(indexOfObject)

 */

// lastIndexOf (like indexOf but returns the last index immediately(no condition needed))

/* const lastIndexOf = testArr.lastIndexOf('pius');
 console.log(lastIndexOf)

 const lastIndexOfObject = testArrObject.lastIndexOf({name: "fope", age: 25});
 console.log(lastIndexOfObject)

 */

// some (returns true if at least one element passes the test)

/* const someTrue = testArr.some((name)=> name.includes('o'));
 console.log(someTrue)

 const someTrueObject = testArrObject.some((person)=> person.age > 20);
 console.log(someTrueObject)

 */

// every (returns true if all elements pass the test)

/* const everyTrue = testArr.every((name)=> name.includes('o'));
 console.log(everyTrue)

 const everyTrueObject = testArrObject.every((person)=> person.age > 20);
 console.log(everyTrueObject)

 */

// includes (returns true if an element exists in an array)

/*
  const includes = testArr.includes('pius');
 console.log(includes)

 const includesObject = testArrObject.includes({name: "fope", age: 25});
 console.log(includesObject)  // false because objects are not equal, but they have the same properties.

 */

// push (adds an element to the end of an array)

/*
  testArr.push('kiwi');
 console.log(testArr)

 testArrObject.push({name: "kiwi", age: 26});
 console.log(testArrObject)

 */

// unshift (adds an element to the beginning of an array)

/*
  testArr.unshift('mango');
 console.log(testArr)

 testArrObject.unshift({name: "mango", age: 24});
 console.log(testArrObject)

 */

//pop (removes the last element from an array and returns it)

/*
  const popped = testArr.pop();
 console.log(testArr, popped)

 const poppedObject = testArrObject.pop();
 console.log(testArrObject, poppedObject)

 /*

 // shift (removes the first element from an array and returns it)

 /*
  const shifted = testArr.shift();
 console.log(testArr, shifted)

 const shiftedObject = testArrObject.shift();
 console.log(testArrObject, shiftedObject)
 */

// toString (returns a string representation of an array)

/* 
  const stringified = testArr.toString();
 console.log(stringified)

 const stringifiedObject = testArrObject.toString();
 console.log(stringifiedObject)

 */

// join (joins all elements of an array into a string)

/* 
  const joined = testArr.join('-');
 console.log(joined)

 const joinedObject = testArrObject.join(', ');
 console.log(joinedObject)

 */

// fill (fills all elements of an array with a static value)

/* 
  testArr.fill('grape');
 console.log(testArr)

 testArrObject.fill({name: "grape", age: 27}, 1, 3);
 console.log(testArrObject)

 */

// copywith (creates a shallow copy of an array)

/* 
  const copied = testArr.copyWithin(0, 2, 4);
 console.log(testArr, copied)

 const copiedObject = testArrObject.copyWithin(0, 2, 4);
 console.log(testArrObject, copiedObject)

 */

//slice (creates a shallow copy of a portion of an array)

/* 
  const sliced = testArr.slice(2, 4);
 console.log(testArr, sliced)

 const slicedObject = testArrObject.slice(2, 4);
 console.log(testArrObject, slicedObject)

 */

// splice (removes elements from an array and, if necessary, inserts new elements in their place)

/* 
  testArr.splice(2, 1, 'kiwi', 'lemon');
 console.log(testArr)

 testArrObject.splice(2, 1, {name: "kiwi", age: 26}, {name: "lemon", age: 27});
 console.log(testArrObject)

 */

// sort (sorts the elements of an array in place and returns the array)

/* 
  testArr.sort();
 console.log(testArr)

 testArrObject.sort((a, b) => a.age - b.age);
 console.log(testArrObject)

 */

// reverse (reverses the order of the elements of an array in place)

/* 
  testArr.reverse();
 console.log(testArr)

 testArrObject.reverse();
 console.log(testArrObject)

 */

// from

/* 
  const from = Array.from(testArr);
 console.log(from)

 const fromObject = Array.from(testArrObject);
 console.log(fromObject)

 */

// isArray (checks if an object is an array)

/*
  const isArray = Array.isArray(testArr);
 console.log(isArray)

 const isArrayObject = Array.isArray(testArrObject); 
 console.log(isArrayObject)
 */

// valueOf (returns the primitive value of an object)

/* 
  const valueOf = testArr.valueOf();
 console.log(valueOf)

 const valueOfObject = testArrObject.valueOf();
 console.log(valueOfObject)

 */

// entries (returns a new Iterator object that contains the [key, value] pairs for each element in the array)

/*

  const entries = testArr.entries();
  for (const entry of entries) {
    console.log(entry);
  }

  const entriesObject = testArrObject.entries();
  for (const entry of entriesObject) {
    console.log(entry);
  }

  */

// keys (returns a new Iterator object that contains the keys for each element in the array)

/* 
  const keys = testArr.keys();
  for (const key of keys) {
    console.log(key);
  }
  const keysObject = testArrObject.keys();
  for (const key of keysObject) {
    console.log(key);
  }

  */

// values (returns a new Iterator object that contains the values for each element in the array)

/*

  const values = testArr.values();
  for (const value of values) {
    console.log(value);
  }
  const valuesObject = testArrObject.values();
  for (const value of valuesObject) {
    console.log(value);
  }

  */

// forEach (calls a function for each element in the array, in order)

/*

  
  testArr.forEach((name, index) => {
    console.log(index, name);
  });

  testArrObject.forEach((person, index) => {
    console.log(index, person.name, person.age);
  });

  */

// map (creates a new array with the results of calling a provided function on every element in the array)

/*
  const mapped = testArr.map((name) => name.toUpperCase());
  console.log(mapped)

  const mappedObject = testArrObject.map((person) => ({...person, name: person.name.toUpperCase()}));
  console.log(mappedObject);
*/

// reduce (apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value)

/* 
  const reduced = testArr.reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(reduced)

  const reducedObject = testArrObject.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
  console.log(reducedObject);

  */

//reduceRight (apply a function against an accumulator and each element in the array (from right to left) to reduce it to a single value)

/* 
  const reducedRight = testArr.reduceRight((accumulator, currentValue) => accumulator + currentValue);
  console.log(reducedRight)

  const reducedRightObject = testArrObject.reduceRight((accumulator, currentValue) => accumulator + currentValue.age, 0);
  console.log(reducedRightObject);

  */

// flat (flatten an array if it has layers)

/*

  const flat = testArr.flat();
  console.log(flat)

  const flatObject = testArrObject.flat();
  console.log(flatObject);

  */

//The end
