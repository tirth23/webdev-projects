// /* Type Coercion refers to the process of automatic or implicit conversion of
// values from one data type to another */
// /* JS will do type coercion mostly to number except for string when using +  */

// /* string to number: '' to 0 || '5' to 5  || '5g' to NaN*/
// console.log(10 - "5");
// console.log(10 * "5");
// console.log(10 / "5");
// console.log(10 % "5");
// console.log(10 - "dfb");

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* boolean to number: true to 1, false to 0 */
// console.log(true + 2);
// console.log(false + 2);

// /* string/boolean to number */
// console.log(true - '5');
// console.log(true - '5g');

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* Exception with + operator */
// /* number to string */
// console.log(10 + '5');

// /* boolean to string */
// console.log(true + '5');
// console.log(10 + true + '5');

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* Equality == While comparison with ==, JS will do type coercion mostly to number */
// /* string to number */
// console.log("5" == 5);
// console.log("5g" == 5);

// /* boolean to number: true to 1, false to 0 */
// console.log(true == 1);
// console.log(true == 5);
// console.log(false == 0);

// /* string/boolean to number */
// console.log(true == '1');
// console.log(true == '5');
// console.log(false == '0');
// console.log(false == 'dcd');

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* Equality === also checks type and don't do type coercion */
// console.log("5" === 5);
// console.log("5g" === 5);
// console.log(true === 1);
// console.log(true === "1");

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* different reference */
// console.log([1, 2, 3] == [1, 2, 3]);
// console.log([1, 2, 3] === [1, 2, 3]);

// console.log({ x: 1, y: 2 } == { x: 1, y: 2 });
// console.log({ x: 1, y: 2 } === { x: 1, y: 2 });

/* ----------------------------------------------------------------------------------------------------------------------- */

// console.log("text" == "te" + "xt");
// console.log("text" === "te" + "xt");

// console.log("abc" == new String("abc")); //different reference but checks inner value
// console.log("abc" === new String("abc")); //different reference

/* ----------------------------------------------------------------------------------------------------------------------- */

// console.log(null == undefined); //interprets them as similar "absence of value" types.
// console.log(null === undefined);

// console.log(NaN == NaN);
// console.log(NaN === NaN);

/* ----------------------------------------------------------------------------------------------------------------------- */

// console.log([1, 2] == "1,2"); //Conversion of Array to String [1, 2] to '1,2'
// console.log([1, 2] === "1,2");

/* ----------------------------------------------------------------------------------------------------------------------- */

// const falsyValues = [false, 0, -0, "", null, undefined, NaN];
// falsyValues.forEach((value) => {
// 	if (value) {
// 		console.log(`${value} is truthy`);
// 	} else {
// 		console.log(`${value} is falsy`);
// 	}
// });

/* ----------------------------------------------------------------------------------------------------------------------- */

// const truthyValues = [1, -1, "0", "false", "true", {}, [], () => {}];
// truthyValues.forEach((value) => {
// 	if (value) {
// 		console.log(`${value} is truthy`);
// 	} else {
// 		console.log(`${value} is falsy`);
// 	}
// });

/* ----------------------------------------------------------------------------------------------------------------------- */

// obj = {
// 	name: "obj",
// 	first: 0,
// 	second: {
// 		name: "second",
// 	},
// };
// /* if obj.first is nullish value then it doesnot check second value */
// // const nestedProp = obj.first && obj.second;

// /* 
// obj.first is not null or undefined before attempting to access obj.first.second. 
// If obj.first is null or undefined, the expression automatically short-circuits, 
// returning undefined 
// */
// const nestedProp = obj.first?.second;

// /* above option chaining polyfill:- */
// // const temp = obj.first;
// // const nestedProp =
// //   temp === null || temp === undefined ? undefined : temp.second;

// console.log(nestedProp);
