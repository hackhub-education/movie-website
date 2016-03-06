var a = 1;
// a is a integer
var b = 0.5;
// b is a float
var c = "webdxd";
// c is a string
console.log("This is my first javascript file");
console.log(a);
console.log(b);
console.log(c);
var d = "1";
console.log(d);
var arr = [1, 'Learn', 3, 5, true];
console.log(arr);
console.log(arr[1]);
var myQuote = "I " + arr[1];
console.log(myQuote);
a = 8;
a = a + b;
// add a to b and put the result to a
console.log(a);
var bool = true;
bool = !true;
var isTrue = !bool;
console.log(isTrue);
arr = [isTrue, a, b, c];
console.log(arr);
a = 11;
b = 2;
b = a % b;
console.log(b);
var book1 = {
 title: "Harry Potter",
 price: 29,
 description: "A boy who knows magic",
 section: ["section1", "sec2", "sec3"]
}

var book2 = {
 title: "Lord of Rings",
 price: 50,
 description: "A story of ring."
}

var book3 = {
 title: "Lord of Rings 2",
 price: 49,
 description: "A story of ring."
}

var bookStore = [book1, book2, book3];

book1.title = "Harry Potter 2";

book1.price += 2;
// increment by a number

book1.price ++;
// increment by 1

book1.price --;
// decrement by 1

console.log(book1);
console.log("Title: " + book1.title);
console.log("Price: " + book1.price);
console.log("Description: " + book1.description);

console.log(bookStore);

console.log(bookStore[0].section[0]);

// bookStore.push("My Book");

// console.log(bookStore);

// bookStore = bookStore.slice(0, 2);

// console.log(bookStore);


console.log(a <= b);

a = "1";

console.log(a);
console.log(b);

console.log(a === b);

var animal = "cat";

// if (animal === "cat") {
//   console.log("meow");
// } else if (animal === "pig") {
//   console.log("xxxxx");
// } else if (animal === "dog") {
//   console.log("wuff");
// } else {
//   console.log("unknown");
// }

switch (animal) {
  case "cat":
    console.log("meow");
    break;
  case "dog":
    console.log("wuff");
    break;
  case "pig":
    console.log("xxxxx");
    break;
  default:
    console.log("unknown");
}

console.log(bookStore.length);

bookStore = [book1, book2, book3];

var a = 10;

while(a >= 0) {
  console.log(a);
  a--;
}

function addPrice(store, incre) {
  console.log(store);
  for (var i = 0; i < store.length; i++) {
    store[i].price += incre;
    console.log(store[i]);
  }
  return "Book Price added by " + incre;
}

function addPrice(store, multi) {
  for (var i = 0; i < store.length; i++) {
    store[i].price *= multi;
    console.log(store[i]);
  }
  return "multi price";
}

console.log(addPrice(bookStore, 10));
// console.log(addPrice(bookStore, 100));


