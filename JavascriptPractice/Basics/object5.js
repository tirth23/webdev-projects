let myvideo = {
    name: "Tirth",
    videolength: 3
}

let changevideolength = function(myobj) {
    return `Time of this video: ${myobj.videolength + 2}`;
}
console.log(changevideolength(myvideo));

let changevideolength1 = function(myobj) {
    return {                       //returns object
        formatone: `Time of this video: ${myobj.videolength + 2}`,
        formattwo: `Time of this video: ${myobj.videolength + 1}`
    }
}
console.log(changevideolength1(myvideo));

//returned object stored in adone
let adone = changevideolength1(myvideo); 
console.log(adone);
console.log(adone.formatone);