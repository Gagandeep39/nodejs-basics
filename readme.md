# Node JS

- JS framwework
- Based on Googles V8 engin
- Compiles JS into native machine code
- Used in serverside application
- Used in data intensive real time apps 

### Serversied archtecute
- Single threaded event loop model
- Processes utiple requests in the same thread 
- Doesnt wait for output of previous thread before starting the first thread\

### NPM (Node package manager)
- Package manager or dependency manager like Maven

### Modules 
- Core modules
  - Available directly
  - No additional import required
  - eg. http, url, path, uti
- Local Modules
  - Moduels built by the pogrammer
- 3rd party module 
  - Downloaded fro NPM

#### Core Modules 
- File System Module
  - Read, create, update, delete files
Reading a single file
```
fs.readFile('hello.txt', function (err, data) {
    if (!err) {
        console.log(data.toString());
    }
})

```

Writing a file and then reading using function within function
```
fs.writeFile('hello.txt', 'Hello, this is a test text', function (error) {
    if (!error) {
        fs.readFile('hello.txt', function (err, data) {
            if (!err) {
                console.log(data.toString());
            }
        })
    }
})
```

### Types of Installs
- Global install `npm instal --g <module_name>`
- Install in a specific app `npm install --save <module_name>`

### JSON file (package.json)
- Stores project descriopton (data data)

### Creating a NodeJs project
- Create a project folder
- Run `npm init` to initialize a `package.json` file
- Create a file `app.js` and write any code 
- Run using `node app.js`

### Basics 
- Primitive data types 
  - String
  - Number
  - Boolean
  - Undefined
  - Null
- Non Primitve data types 
  - Object
  - Date
  - Array

### Operators 
- `x==y` Checks if 2 values are same
- `x===y` Checks if 2 objects(data types) are same