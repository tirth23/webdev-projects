const courses = [
    {
        name: "Complete React JS Course",
        price: "2.3"
    },
    {
        name: "Complete Angular Course",
        price: "2.5"
    },
    {
        name: "Complete MERN Course",
        price: "2.1"
    },
    {
        name: "Complete C++ Course",
        price: "2.8"
    },
];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = ""                                       //reset value after sort
    courses.forEach((course) => {
        const li = document.createElement("li");               //<li></li>
        li.classList.add("list-group-item");                  //<li class="list-group-item"></li>
        const name = document.createTextNode(course.name);
        li.appendChild(name);                                  //<li class="list-group-item">name</li>

        const span = document.createElement("span");            
        span.classList.add("float-right"); 
        const price = document.createTextNode("$ " + course.price);           //<span class="float-right">$ price</span>
        span.appendChild(price);

        li.appendChild(span);
        /*  <li class="list-group-item">
                name
                <span class="float-right">$ price</span>
            </li>
        */

        ul.appendChild(li);
    });
}
//generateList();

window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price)
    generateList();
})