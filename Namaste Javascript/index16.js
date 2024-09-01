function resolveAfter15Seconds() {
	console.log("starting slow promise");
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("slow");
			console.log("slow promise is done");
		}, 15000);
	});
}

function resolveAfter5Seconds() {
	console.log("starting fast promise");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("fast");
			console.log("fast promise is done");
		}, 5000);
	});
}

async function sequentialStart() {
	console.log("== sequentialStart starts ==");

	// 1. Start a timer, log after it's done
	const slow = resolveAfter15Seconds();
	console.log(await slow);
  console.log("hi");
	// 2. Start the next timer after waiting for the previous one
	const fast = resolveAfter5Seconds();
	console.log(await fast);

	console.log("== sequentialStart done ==");
}

async function sequentialWait() {
	console.log("== sequentialWait starts ==");

	// 1. Start two timers without waiting for each other
	const slow = resolveAfter15Seconds();
	const fast = resolveAfter5Seconds();

	// 2. Wait for the slow timer to complete, and then log the result
	console.log(await slow);
	// 3. Wait for the fast timer to complete, and then log the result
	console.log(await fast);

	console.log("== sequentialWait done ==");
}

async function concurrent1() {
	console.log("== concurrent1 starts ==");

	// 1. Start two timers concurrently and wait for both to complete
	const results = await Promise.all([
		resolveAfter15Seconds(),
		resolveAfter5Seconds(),
	]);
	// 2. Log the results together
	console.log(results[0]);
	console.log(results[1]);

	console.log("== concurrent1 done ==");
}

async function concurrent2() {
	console.log("== concurrent2 starts ==");

	// 1. Start two timers concurrently, log immediately after each one is done
	await Promise.all([
		(async () => console.log(await resolveAfter15Seconds()))(),
		(async () => console.log(await resolveAfter5Seconds()))(),
	]);

	console.log("== concurrent2 done ==");
}

// after 15 seconds, logs "slow", then after 5 more second, "fast"
// sequentialStart();

// after 15 seconds, logs "slow" and then "fast"
// sequentialWait();

// same as sequentialWait
// concurrent1();

// after 5 second, logs "fast", then after 10 more second, "slow"
// concurrent2();