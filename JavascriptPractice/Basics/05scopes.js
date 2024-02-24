/*
var-function scope-redeclared-reassign
let-block scope-no redeclare- reassign
const-block scope-no redeclare- no reassign
*/

function display()
{
 var msg="Good morning"
 let let_msg="Good morning"
 const org="Accenture"
 {
    var msg="Hello world"
    var msg="Hi every one!!"//redeclare
    msg="HI EVERYONE"//reassign

    let let_msg="Hello world"
    //let let_msg="Hi every one!!"//redecalre//error
    let_msg="HELLO WORLD"//reassign

    const org="Accenture Pvt Ltd"
    //const org="xyz pvt ltd"//redeclare//error
    org="xyz pvt ltd"


    console.log("var:"+msg)
    console.log("let:"+let_msg)
    console.log("org:"+org)
 }
 console.log("----Outside block---")
 console.log("var:"+msg)
 console.log("let:"+let_msg)
 console.log("org:"+org)

}

display()