console.log("%cJS Lab Connected — Start completing the TODOs!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-2: SYNTAX & VARIABLES
// ==========================

// Task 2.1 — declare & reassign
// Create let course = "CIS101"; display it usinng console.log(course), reassign to "CIS102"; display it again.
// write code here

let  course = "CIS101";
console.log(course);
course = "CIS102";
console.log(course);


// Task 2.2 — const safety
// Create const SCHOOL = "MyCollege"; then TRY to reassign it and observe the Console error. Add a comment explaining    why  reassignment fails.
// NOTE: For now, keep the reassignment line commented so the file runs without errors.
// const SCHOOL = "MyCollege";
// SCHOOL = "OtherCollege"; // <-- Uncomment to see the error, then re-comment after testing
const SCHOOL = "MyCollege";
// SCHOOL = "OtherCollege";
// Reassignment fails because constants cannot be reassigned after their initial declaration.
console.log(SCHOOL);

// ==========================
// TODO-3: ARITHMETIC & TYPES
// ==========================

// Task 3.1 — arithmetic basics
// Given let x = 8, y = 3; log x+y, x-y, x*y, x/y, x%y.
// write code here
let x = 8, y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);


// Task 3.2 — number vs string
// Display results of "2" + 3, 2 + "3", and 2 + 3. Add a short comment: why do the first two concatenate?
// write code here
console.log("2" + 3); // "23"
console.log(2 + "3"); // "23"
console.log(2 + 3);   // 5
// The first two concatenate because when one operand is a string, JavaScript converts the other operand to a string and performs string concatenation.

// Read chapter 4 in zyBooks: Compound Assignment Operators



// ==========================
// TODO-4: CONDITIONALS (CORE)
// ==========================

// Task 4.1 — else-if ladder
// Write a program that checks a user's age (take age input from user).
//       Use if–else if–else statements to categorize and log:
//         - "Child" if age < 13
//         - "Young" if age is between 13 and 35
//         - "Aged" if age > 35
// write code here
let age = prompt("Please enter your age:");
age = parseInt(age); // Convert input to a number

if (age < 13) {
    console.log("Child");
} else if (age >= 13 && age <= 35) {
    console.log("Young");
} else if (age > 35) {
    console.log("Aged");
} else {
    console.log("Invalid age");
} 

// Task 4.2 — Switch statement
// Create a variable let day = "Mon".
//       Use a switch statement to check the value of day.
//         - If it is "Mon", "Tue", "Wed", "Thu", or "Fri", log "weekday".
//         - If it is "Sat" or "Sun", log "weekend".
//         - For any other value, log "unknown".
// write code here
let day = "Mon";

switch (day) {
    case "Mon":
   
    case "Wed":
     case "Tue":
    case "Thu":
    case "Fri":
        console.log("weekday");
        break;
    case "Sat":
    case "Sun":
        console.log("weekend");
        break;
    default:
        console.log("unknown");
        break;
}

// Read Chapter 4 in zyBooks: Conditional (ternary) operator

// ===============
// TODO-5: LOOPS
// ===============

// Task 5.1 — for loop sum
// TODO: Sum integers 1..10 with a for loop; display the result of total sum.
// write code here
let totalSum = 0;
for (let i = 1; i <= 10; i++) {
    totalSum += i;
}
console.log(totalSum);


// Task 5.2 — while loop
// let t = 3; while(t > 0), decrement the value t variable in each iteration and display the result.
// write code here
let t = 3;
while (t > 0) {
    console.log(t);
    t--;
}

// Read Chapter 4 in zyBooks: Do-While Loop
// write code here
let n = 3;
do {
    console.log(n);
    n--;
} while (n > 0);
// =============================
// TODO-6: FUNCTIONS (DECL, RETURN, ARROW)
// =============================

// Task 6.1 — pure function + return
// Make a function add(a,b){ return a+b; } display the result of add(2,5).
// write code here
function add(a, b) {
    return a + b;
}
console.log(add(2, 5));


// Task 6.2 — Arrow functions
// Make an arrow function; const cube = n => n*n*n; cube(3)
// write code here
const cube = n => n * n * n;
console.log(cube(3));

// =================================
// TODO-7: SCOPE & GLOBAL OBJECT (ESSENTIALS)
// =================================

// Task 7.1 — var vs let scope
// Declare var a = 1; let b = 2 inside a block { },  then try displaying both outside the block; observe differences.
// write code here
var a = 1;
let b = 2;

{
    var a = 3; // This will affect the outer 'a'
    let b = 4; // This 'b' is block-scoped
}

console.log(a); // 3, because 'var' is function-scoped and was redeclared
console.log(b); // 2, because 'let' is block-scoped and the outer 'b' remains unchanged

// ==================
// TODO-8: ARRAYS (CORE)
// ==================

// Task 8.1 — create & mutate
// TODO: let nums = [3,1,4]; then push(1), unshift(9), pop(); log final array and length.
// write code here
let nums = [3, 1, 4];
nums.push(1);
nums.unshift(9);
nums.pop();

for(let i = 0; i < nums.length; i++) {
    console.log(nums[i]); // Log each element of the array
}
console.log(nums);        // Final array
console.log(nums.length); // Length of the array  



// End of manual — great job! Keep this file open and work task by task.
