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
let result = letters.slice(1, 3);
console.log(result); // ["b", "c", "d"]


// splice() — Add/Remove items (changes original array)
let fruitsData = ["Apple", "Banana", "Cherry", "Mango"];
// TODO: Remove "Banana" and "Cherry"
fruitsData.splice(1, 2);
console.log(fruitsData); // ["Apple", "Mango"]


// includes() — Check if an item exists
let cars = ["BMW", "Audi", "Tesla"];
// TODO: Check if "Tesla" is present
let result = cars.includes("Tesla");
console.log(result); // true

// indexOf() — Find position of an item
let cities = ["Kathmandu", "Pokhara", "Lalitpur"];
// TODO: Find index of "Pokhara"
let index = cities.indexOf("Pokhara");
console.log(index); // 1


// join() — Convert array into a string
let words = ["Hello", "World"];
// TODO: Convert array into: "Hello World"
let result = words.join(" ");
console.log(result); // "Hello World"


// map() — Return a new array with modifications
let prices = [100, 200, 300];
// TODO: Add 10% tax to each price
let pricesWithTax = prices.map(price => price * 1.1);
console.log(pricesWithTax); 
// [110, 220, 330]


// filter() — Return items that match a condition
let age = [12, 19, 22, 15, 30];
// TODO: Return only ages >= 18
let adults = age.filter(a => a >= 18);
console.log(adults); // [19, 22, 30]


// reduce() — Combine array values into one
let nums = [5, 10, 15];
// TODO: Find total sum of numbers
let total = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(total); // 30
