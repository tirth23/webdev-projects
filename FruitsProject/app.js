/* USING NATIVE MONGODB DRIVER */
// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri = "mongodb://127.0.0.1:27017";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('fruitsDB');
//     const fruits = database.collection('fruits');

//     const docs = [
//         {
//           name: "Apple",
//           score: 8,
//           review: "Great Fruits"
//         },
//         {
//           name: "Orange",
//           score: 6,
//           review: "Kinda Sour"
//         },
//         {
//           name: "Banana",
//           score: 9,
//           review: "Great Stuff!"
//         }
//     ]

//     const options = { ordered: true };
//     await fruits.insertMany(docs, options);

//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


/*USING MONGOOSE DRIVER*/ 
const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    // name: "Peaches",
    rating: 7,
    review: "Peaches keeps the doctor away"
});
// fruit.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number, 
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//     name: "Pineapple",
//     score: 9,
//     review: "Great fruit"
// }); 
// pineapple.save();

// const person = new Person({
//     name: "Amy",
//     age: 17,
//     favouriteFruit: pineapple
// });
// person.save();


//UPDATE & EMBED MANGO FOR EXISING JOHN
const mango = new Fruit({
    name: "Mango",
    score: 10,
    review: "Great mango"
}); 
mango.save();

Person.updateOne(
    {name: "John"},
    {favouriteFruit: mango}
)
.then(function () {
    console.log("Successfully Updated the document!!!");
})
.catch(function(err){
    console.log(err);
});


//INSERT MULTIPLE DOCUMENTS
// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "The Best Fruit!"
// });
 
// const orange = new Fruit({
//     name: "Orange",
//     rating: 6,
//     review: "The Sour Fruit!"
// });
 
// const banana = new Fruit({
//     name: "Banana",
//     rating: 8,
//     review: "The Digestive Fruit!"
// });

// Fruit.insertMany([kiwi, orange, banana]) 
//     .then(function(){
//         console.log("Successfully saved all the fruits to fruitsDB");
//     })
//     .catch(function(err){
//         console.log(err);
//     });


// //READ DOCUMENTS
// Fruit.find()
// .then((fruits)=>{
//     console.log(fruits)

//     // mongoose.connection.close();
    
//     fruits.forEach(function(fruit){
//         console.log(fruit.name);
//     })
// })
// .catch(err => {
//     console.log(err)})


// //UPDATE DOCUMENT
// Fruit.updateOne(
//     {_id: "64085eef50f19f3e65f4ac04"},
//     {name: "Watermelon"}
// )
// .then(function () {
//     // mongoose.connection.close();
//     console.log("Successfully Updated the document!!!");
// })
// .catch(function(err){
//     console.log(err);
// });


// //DELETE DOCUMENT
// Fruit.deleteOne(
//     {name: "Peaches"}
// )
// .then(function () {
//     // mongoose.connection.close();
//     console.log("Successfully deleted the document!!!");
// })
// .catch(function(err){
//     console.log(err);
// });


// //DELETE DOCUMENTS
// Person.deleteMany(
//     {name: "John"}
// )
// .then(function () {
//     // mongoose.connection.close();
//     console.log("Successfully deleted all document!!!");
// })
// .catch(function(err){
//     console.log(err);
// });