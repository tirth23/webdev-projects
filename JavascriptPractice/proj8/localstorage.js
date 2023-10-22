localStorage.setItem('hero', 'thor');
localStorage.setItem('todo', 'Buy milk');
var myHero = localStorage.getItem('hero');
console.log(myHero);
console.log(localStorage.getItem('todo'));
//update
localStorage.setItem('todo', 'Record youotube videos');
console.log(localStorage.getItem('todo'));

localStorage.removeItem('hero');
console.log(localStorage.getItem('hero'));

//clear localstorage
//localStorage.clear();

