const newTodos = [{
    title: "Buy Bread",
    isDone: false,
}, {
    title: "Go to Gym",
    isDone: false,
}, {
    title: "Record youtube videos",
    isDone: true,
}]

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
// Otherwise, it returns -1, indicating that no element passed the test.
const index = newTodos.findIndex(function(todo, index) {
    console.log(todo);           //scan until found
    // console.log(index);
    return todo.title === "Go to Gym" 
})
console.log(index)

const findTodo = function(myTodos, title) {
    const index = myTodos.findIndex(function(todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return myTodos[index]
}
let printMe = findTodo(newTodos, "Go To gym");
console.log(printMe);

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.
const findTodo1 = function(myTodos, title) {
    const titleReturned = myTodos.find(function(todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}
let printMe1 = findTodo1(newTodos, "Go To gym");
console.log(printMe1);