/* Event Bubbling - default behavior */
/* Not all events bubble up the DOM tree like focus */
// document.querySelector("#grandparent")
// .addEventListener("click", () => {
//     console.log("grandparent clicked");
// }, false)
// document.querySelector("#parent")
// .addEventListener("click", () => {
//     console.log("parent clicked");
// }, false)
// document.querySelector("#child")
// .addEventListener("click", () => {
//     console.log("child clicked");
// }, false)


/* Event Capturing */
// document.querySelector("#grandparent")
// .addEventListener("click", () => {
//     console.log("grandparent clicked");
// }, true)
// document.querySelector("#parent")
// .addEventListener("click", () => {
//     console.log("parent clicked");
// }, true)
// document.querySelector("#child")
// .addEventListener("click", () => {
//     console.log("child clicked");
// }, true)


/* Mix of both - first capture, then bubble */
// document.querySelector("#grandparent")
// .addEventListener("click", () => {
//     console.log("grandparent clicked");
// }, true)
// document.querySelector("#parent")
// .addEventListener("click", () => {
//     console.log("parent clicked");
// }, false)
// document.querySelector("#child")
// .addEventListener("click", () => {
//     console.log("child clicked");
// }, true)


/* Stop Propagation in Event Bubbling */
// document.querySelector("#grandparent")
// .addEventListener("click", (e) => {
//     console.log("grandparent clicked");
// }, false)
// document.querySelector("#parent")
// .addEventListener("click", (e) => {
//     console.log("parent clicked");
//     e.stopPropagation();
// }, false)
// document.querySelector("#child")
// .addEventListener("click", (e) => {
//     console.log("child clicked");
//     e.stopPropagation();
// }, false)


/* Stop Propagation in Event Capturing */
// document.querySelector("#grandparent")
// .addEventListener("click", (e) => {
//     console.log("grandparent clicked");
//     e.stopPropagation();
// }, true)
// document.querySelector("#parent")
// .addEventListener("click", (e) => {
//     console.log("parent clicked");
// }, true)
// document.querySelector("#child")
// .addEventListener("click", (e) => {
//     console.log("child clicked");
//     e.stopPropagation();
// }, true)