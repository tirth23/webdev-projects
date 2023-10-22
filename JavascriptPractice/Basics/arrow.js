const todos = [{
    title: "Buy bread",
    isDone: true,
}, {
    title: "GO to gym",
    isDone: true,
}, {
    title: "Record youtube videos",
    isDone: false,
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)
console.log(thingsDone);