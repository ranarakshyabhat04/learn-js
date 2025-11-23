let fruits = ["Apple", "Orange", "Plum"];

// Adding a new fruit to the end of the array
fruits.push("grapess")
console.log(fruits);

// Removing the last fruit from the array
fruits.pop("plum")
console.log(fruits);

// Adding a new fruit to the beginning of the array
 fruits.unshift("Grapes")


// Removing the first fruit from the array
  fruits.shift("Apple")

// slice() — Copy a part of an array (without changing original)
let letters = ["a", "b", "c", "d", "e"];
// TODO: Copy only ["b", "c", "d"]

// splice() — Add/Remove items (changes original array)
let fruitsData = ["Apple", "Banana", "Cherry", "Mango"];
// TODO: Remove "Banana" and "Cherry"

// includes() — Check if an item exists
let cars = ["BMW", "Audi", "Tesla"];
// TODO: Check if "Tesla" is present

// indexOf() — Find position of an item
let cities = ["Kathmandu", "Pokhara", "Lalitpur"];
// TODO: Find index of "Pokhara"

// join() — Convert array into a string
let words = ["Hello", "World"];
// TODO: Convert array into: "Hello World"

// map() — Return a new array with modifications
let prices = [100, 200, 300];
// TODO: Add 10% tax to each price

// filter() — Return items that match a condition
let age = [12, 19, 22, 15, 30];
// TODO: Return only ages >= 18

// reduce() — Combine array values into one
let nums = [5, 10, 15];
// TODO: Find total sum of numbers