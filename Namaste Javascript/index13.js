/*
fetch() will return promise and stores in user
initaliy it will be in pending
after it gets data, it is fulfilled
check in browser console
*/

// const GITHUB_API = "https://api.github.com/users/tirth23";

// const user = fetch(GITHUB_API);
// console.log(user);

// /* arg in callbak function is data/response returned in promise */
// user.then(function(data) {
//     console.log(data);
// })


/* Callback Hell */

// const cart = ["shoes", "kurta", "pants"];

// api.createOrder(cart, function() {
//     api.proceedToPayment(function() {s
//         api.showOrderSummary(function() {
//             api.walletSummary();
//         });
//     });
// })