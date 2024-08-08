/* Bad Practice => callback hell */
// createOrder(cart, function(orderID) {
//     proceedToPayment(orderID, function(paymentInfo) {
//         showSummary(paymentInfo, function() {
//             updateWallet();
//         })
//     }); 
// });


// const cart = ["shirt", "shoes", "pants"];

// const prom = createOrder(cart);  // orderId
// console.log(prom);

// /* once promise resolved, callback function is called */
// prom
//     .then(function (orderId) {
//         console.log(orderId);
//         return orderId;
//     })
//     .catch(function (err) {
//         console.log(err.message);
//     })
//     .then(function (orderId) {
//         return proceedToPayment(orderId);
//     })
//     .then(function (PaymentInfo) {
//         console.log(PaymentInfo);
//     })
//     /* to handle rejection from promise, catch is used */
//     .catch(function (err) {
//         console.log(err.message);
//     })
//     .then(function (orderId) {
//         console.log("No matter what happens, it wil be definitely be called.");
//     });

// /* PRODUCER */
// function createOrder(cart) {
//     /* creating promise using promise Constructor */
//     const pr = new Promise(function (resolve, reject) {
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }
//         /* logic for createOrder */
//         const orderId = "12345";
//         if (orderId) {
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 5000);
//             /* when promise is resolved arg in resolve() is passed to callback function  */
//             // resolve(orderId); 
//         }
//     });
//     return pr;
// }

// function proceedToPayment(orderId) {
//     return new Promise(function (resolve, reject) {
//         resolve("Payment Successful");
//         // reject("Payment Failed");
//     });
// }

// function validateCart(cart) {
//     return true;
//     // return false;
// }