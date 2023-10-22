const student = {
    name: 'John',
    age: 23,
    isActive: true
}

//convert this object into string to be stored in local storage 
const studentObjToString = JSON.stringify(student);
console.log(typeof studentObjToString);
localStorage.setItem('student', studentObjToString);

//string to JSON
const toJSONStudent = JSON.parse(studentObjToString);
console.log(typeof toJSONStudent);

console.log(toJSONStudent.age);