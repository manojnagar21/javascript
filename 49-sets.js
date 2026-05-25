/*
1. stores data
2. have it's own methods
3. no index based access
4. ordere is not guaranteed
5. unique items only (no duplicates allowed)
*/
// syntax
// const setVar = new Set(any iterable)
const numbers = new Set([1, 2, 3, 4, 5, 5]);
console.log(numbers);
console.log(numbers[3]);

const stringSet = new Set("abcdae");
console.log(stringSet);

const newSet = new Set();
console.log(newSet);
// add method to add values to set
newSet.add(1);
console.log(newSet);
newSet.add(2);
console.log(newSet);
newSet.add(2);
console.log(newSet);
const items = ["a", "b", "c", "d", "e"];
newSet.add(items);
console.log(newSet);
newSet.add(items);
console.log(newSet); // duplicates elements are not allowed
newSet.add(["a", "b", "c", "d", "e"]);
console.log(newSet);
newSet.add(["a", "b", "c", "d", "e"]);
console.log(newSet); // two different arrays in different memory

// has method to check if element is present in set - return true or false
if(newSet.has(1)) {
    console.log("yes 1 present");
} else {
    console.log("no 1 not present");
}
for(let item of newSet) {
    console.log(item);
}

const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
// extract unique elements from the array
const uniqueElements = new Set(myArray);
console.log(myArray); // original array is not mutated
console.log(uniqueElements);
// find the length of the unique elements set
console.log(uniqueElements.length); // sets do not have length property
console.log(uniqueElements.size); // instead use size for number of elements
let length = 0;
for(let element of uniqueElements) {
    length = length + 1;
}
console.log(length);