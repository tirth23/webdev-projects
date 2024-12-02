// /* At its core, currying is a functional programming technique that involves
// breaking down a function that takes multiple arguments into a series of functions
// that take one argument each. This creates a chain of functions, where each function
// returns another function until the final result is achieved */

// /* Currying with bind */
// let multiply = function (x, y) {
// 	console.log(x * y);
// };

// let multiplyTwo = multiply.bind(this, 2);
// console.log(multiplyTwo);
// multiplyTwo(5);

// let multiplyTwo2 = multiply.bind(this);
// multiplyTwo2(5, 2);

// let multiplyThree = multiply.bind(this, 3, 4);
// multiplyThree(5);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* Currying with closure */
// function multiply(x) {
// 	return function (y) {
// 		console.log(x * y);
// 	};
// }
// let multiplyTwo = multiply(2);
// multiplyTwo(5);
// let multiplyThree = multiply(3);
// multiplyThree(5);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* a pure function is one that, for the same inputs, always returns the same output and has no side effects.  */
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); // 5
// console.log(add(2, 3)); // 5

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* In contrast, an impure function may have side effects or may return different results for the same inputs due to external factors. */
// let counter = 0;
// function incrementCounter() {
// 	counter += 1; // Modifies external state
// 	return counter;
// }
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* Reusability of Functions */
// const multiply = (x) => (y) => x * y;

// const double = multiply(2);
// const triple = multiply(3);

// console.log(double(5));
// console.log(triple(5));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* Simplifying Function Composition */
// const add = (a) => (b) => a + b;
// const multiply = (a) => (b) => a * b;

// const addAndMultiply = (x) => (y) => multiply(2)(add(x)(y));

// console.log(addAndMultiply(3)(4)); // (3 + 4) * 2 = 14

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* Avoiding Repetition in Configurable Operations */
// const fetchWithBaseUrl = (baseUrl) => (endpoint) =>
// 	fetch(`${baseUrl}${endpoint}`);

// const apiFetch = fetchWithBaseUrl("https://api.example.com");

// apiFetch("/users"); // Fetches https://api.example.com/users
// apiFetch("/posts"); // Fetches https://api.example.com/posts

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* Enhancing Readability and Modularity */
// const checkPermission = (role) => (resource) => (action) =>
// 	console.log(
// 		`${role} is ${action ? "allowed" : "not allowed"} on ${resource}`
// 	);

// const adminCheck = checkPermission("admin");
// const userCheck = checkPermission("user");

// adminCheck("dashboard")(true); // admin is allowed on dashboard
// userCheck("settings")(false); // user is not allowed on settings

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* Custom Event Handling in React */
// const handleInputChange = (field) => (event) => {
//   console.log(`${field}: ${event.target.value}`);
// };

// // Usage in JSX
// <input onChange={handleInputChange('username')} />;
// <input onChange={handleInputChange('email')} />;

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* Pipeline and Data Transformation: Currying works well with pipelines to process data in stages. */
// const filter = (predicate) => (array) => array.filter(predicate);
// const map = (transform) => (array) => array.map(transform);

// const greaterThan5 = filter((x) => x > 5);
// const double = map((x) => x * 2);

// const numbers = [2, 6, 8, 1];
// console.log(double(greaterThan5(numbers))); // [12, 16]

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* Currying is useful for creating validation utilities. */
// const isLengthValid = (min) => (max) => (str) =>
// 	str.length >= min && str.length <= max;

// const isPasswordValid = isLengthValid(8)(16);

// console.log(isPasswordValid("mypassword")); // true
// console.log(isPasswordValid("short")); // false

/* ---------------------------------------------------------------------------------------------------------------------------------- */
