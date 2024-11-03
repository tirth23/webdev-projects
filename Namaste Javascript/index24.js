// /*
// Generator functions in JavaScript are special functions that can be paused and resumed, allowing you to generate
// values on-the-fly and maintain the function’s state across multiple invocations.

// They provide a more powerful way to work with iterators, enabling you to yield values one at a time instead of returning
// them all at once.

// A generator function can be exited and later re-entered, with its context
// (variable bindings) saved across re-entrances.

// generator function used as iterator for infinite loop return genrator object. genrator Object has next()
// which has yield value & done value depending on completion

// The yield operator is used to pause and resume a generator function.
// */

// function* generator(i) {
// 	yield i + 2;
// 	yield i + 10;
// }

// const gen = generator(10);

// console.log(gen.next().value);
// console.log(gen.next().value);

/* ----------------------------------------------------------------------------------------------------------------- */

// function* simpleGenerator() {
// 	console.log("Before 1");
// 	yield 1;
// 	console.log("After 1");
// 	console.log("Before 2");
// 	yield 2;
// 	console.log("After 2");
// 	console.log("Before 3");
// 	yield 3;
// 	console.log("After 3");
// }

// const generatorObject = simpleGenerator();
// console.log(generatorObject);
// console.log(generatorObject.next()); //prints value till first yield
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());

// const genObj1 = simpleGenerator();
// console.log(genObj1.next().value);

/* ----------------------------------------------------------------------------------------------------------- */

// function* generateId() {
// 	let id = 1;
// 	while (true) {
// 		yield id;
// 		id++;
// 	}
// }

// const genObj2 = generateId();
// console.log(genObj2.next()); //will generate new id everytime next is called
// console.log(genObj2.next());
// console.log(genObj2.next());
// console.log(genObj2.next());

/* ----------------------------------------------------------------------------------------------------------------- */

// function* generateId2() {
// 	let id = 1;
// 	while (true) {
// 		const argValueFromNext = yield id;
// 		console.log(argValueFromNext);
// 		if (argValueFromNext !== undefined) {
// 			id += argValueFromNext;
// 		} else {
// 			id++;
// 		}
// 	}
// }
// const genObj3 = generateId2();
// console.log(genObj3.next());
// console.log(genObj3.next(4)); //will pass 4 as arg so value will start from 5
// console.log(genObj3.next());
// console.log(genObj3.next());
// console.log(genObj3.return(10)); //it exist from generator function
// console.log(genObj3.next());
// // console.log(genObj3.throw(new Error("error"))); //throws error
