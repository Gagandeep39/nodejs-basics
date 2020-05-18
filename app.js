var firstName = 'Gagandeep'
console.log(firstName);

// Creating a function
function sayHello(name) {
    return 'Hello ' + name + '!!!';
}
console.log(sayHello('Gagan'));

// Creating an anonyms function/ function as a variable
var anonymsMethod = function (name) {
    return 'Hello ' + name + '!!!';
}
console.log(anonymsMethod('Gagan'));

// Creating Objects in JS
var student = {
    name: 'Gagandeep Singh',
    age: 21
}
console.log(student.name);

//Reading a file using 'fs' module
// Method 1
var fs = require('fs')
// Newer method (Only work with modules)
// import fs from 'fs';
fs.readFile('hello.txt', function (err, data) {
    if (!err) {
        console.log(data.toString());
    }
})

// Fuction within function
fs.writeFile('hello.txt', 'Hello, this is a test text', function (error) {
    if (!error) {
        fs.readFile('hello.txt', function (err, data) {
            if (!err) {
                console.log(data.toString());
            }
        })
    }
})
