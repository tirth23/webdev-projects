// const users = [
//     { firstName: "Tirth", lastName: "Patel", age: 25 },
//     { firstName: "Rahul", lastName: "Kadva", age: 90 },
//     { firstName: "Samsung", lastName: "Korea", age: 22 },
//     { firstName: "Akshay", lastName: "Saini", age: 25 }
// ];

// const output = users.map((x) => x.firstName + " " + x.lastName);
// console.log(output);

// const output1 = users.reduce(function (acc, curr) {
//     if(acc[curr.age]) {
//         acc[curr.age] = ++ acc[curr.age]; 
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});
// console.log(output1);

// const output3 = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output3);

// const output4 = users.reduce(function (acc, curr) {
//     if(curr.age < 30) {
//         acc.push(curr.firstName);
//     }
//     return acc;
// }, []);
// console.log(output4);