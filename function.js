/* 1. Write a function called foo() which prints “foo” and a function called bar() which prints
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
the foo() to see the output.

function foo() {
  console.log("foo");
  bar();
}
function bar() {
  console.log("bar");
}
foo(); */

/* 2. Write a function called make_avg() which will take an three integers and return the
 average of those values.

function make_avg(num1, num2, num3) {
  const total = num1 + num2 + num3;
  const average = total / 3;
  return average;
}

const bangla = 83;
const english = 75;
const math = 35;

const myAverage = parseFloat(make_avg(bangla, english, math).toFixed(2));
console.log(myAverage); */

/* 3. Challenging: Write a function called make_avg() which will take an array of integers and
 the size of that array and return the average of those values.

function make_avg(myNumb) {
  const total = myNumb.reduce((acc, c) => acc + c, 0);
  const average = total / myNumb.length;
  return average;
}
const myNumb = [76, 59, 99, 87, 66, 35, 20];

const myAverage = make_avg(myNumb);
console.log(myAverage); */

/* 4. Write a function called odd_even() which takes an integer value and tells whether this
 value is even or odd. You need to do it in 4 ways:
 ● Has return + Has parameter
 ● No return + Has parameter

function odd_even(num) {
  if (num % 2 == 0) {
    console.log("This is even number");
  } else if (num % 2 == 1) {
    console.log("This is odd number");
  }
  return;
}

function odd_even(num) {
  if (num % 2 == 0) {
    console.log("This is even number");
  } else if (num % 2 == 1) {
    console.log("This is odd number");
  }
}
odd_even(1);
odd_even(10);
 */

/* 5. You are in a hurry to go to your school on time. But when you are crossing the road, the
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a
variable called signal. Its value can be green, yellow or red & we will get different activities as
output depending on the variable. So, hurry up. 

const signal = "red";

switch (signal) {
  case "yellow":
    console.log("you should stop");
    break;
  case "green":
    console.log("you should cross the road");
    break;
  case "red":
    console.log("you may be in danger");
    break;
  default:
    console.log("In ki dor ulda folda");
    break;
}  

if (signal == red) {
  console.log("you may be in danger");
} else if (signal == "yellow") {
  console.log("you should stop");
} else if (signal == "green") {
  console.log("you should cross the road");
}
 */

/* 6. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

function multiplication(num) {
  for (let i = 1; i <= 10; i++) {
    let sum = num * i;
    console.log(myNumb, "*", i, "=", sum);
  }
  return;
}
const myNumb = 13;
multiplication(myNumb); */

/* 7. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function lowercase(name) {
  const yourName = name.toLowerCase();
  console.log(yourName);
  return yourName;
}

const myName = "MIZbA";
lowercase(myName); */

/* 8. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।  

function fullName(fName, lName) {
  const myName = fName + " " + lName;
  console.log(myName);
  return myName;
}

const firstName = "Mizba Uddin";
const lastName = "Tareq";
fullName(firstName, lastName); */

/* 9. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে। 

function square(num) {
  const sum = num ** 2;
  console.log(sum);
  return sum;
}

square(15); */

/* 10. pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা এবং pepperoni প্রিন্ট করবা।

const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],

  crust: "deep dish",

  serves: 2,
};

console.log(pizza.toppings[2]); */
