/*

=> There are 3 types of modules...
    => Core Module
    => Custom Module
    => NPM Module

    => Core Module :--> The module or package which has give by node js internally is called core module
                        "It has 4 sub-types" :-

                        1) fs module   ->  use to read the file system
                        2) http module ->  use for Server Creation
                        3) os module   ->  use for Access the operating "system data, free-memory, total-memory, ram-size, home-directory...etc"
                        4) path Module ->  use to construct the dynamic path

 */

// FS_Module (file system module)
const fs = require('fs');

// Synchronous Way
let fileContent = fs.readFileSync('./message.txt', 'utf-8');
console.log(fileContent);

// Create new file content
let newFileContent = `Hello! This is a new file Content : ${fileContent}`;
fs.writeFileSync('data.txt', newFileContent, 'utf-8');
console.log('Data is Written to the first file');


// Asynchronous way
fs.readFile('./message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    fs.writeFile('./hello.txt', data, 'utf-8' ,(err) => {
        if (err) throw err;
        console.log('Data is written to the second file');
    });
});
console.log('this is a fs core module example');

// JSON Files
let employees = [{"id":1,"first_name":"Rycca","last_name":"Bazylets","email":"rbazylets0@house.gov","gender":"Female","ip_address":"109.187.104.29"},
    {"id":2,"first_name":"Shelden","last_name":"Stirtle","email":"sstirtle1@deviantart.com","gender":"Male","ip_address":"204.169.202.148"},
    {"id":3,"first_name":"Erroll","last_name":"Delete","email":"edelete2@acquirethisname.com","gender":"Female","ip_address":"3.19.93.191"},
    {"id":4,"first_name":"Wolfy","last_name":"Whaley","email":"wwhaley3@wiley.com","gender":"Male","ip_address":"30.39.146.93"},
    {"id":5,"first_name":"Myron","last_name":"Haygreen","email":"mhaygreen4@typepad.com","gender":"Female","ip_address":"179.235.153.223"},
    {"id":6,"first_name":"Corri","last_name":"Tromans","email":"ctromans5@google.it","gender":"Male","ip_address":"18.197.53.239"},
    {"id":7,"first_name":"Kalie","last_name":"Gilbert","email":"kgilbert6@apple.com","gender":"Female","ip_address":"54.106.214.215"},
    {"id":8,"first_name":"Maddi","last_name":"Lashley","email":"mlashley7@live.com","gender":"Female","ip_address":"179.102.30.3"},
    {"id":9,"first_name":"Chantalle","last_name":"Mizen","email":"cmizen8@google.it","gender":"Female","ip_address":"82.79.190.29"},
    {"id":10,"first_name":"Gaylene","last_name":"Snowden","email":"gsnowden9@techcrunch.com","gender":"Genderqueer","ip_address":"195.185.215.253"}];

fs.writeFile('employees.json', JSON.stringify(employees), 'utf-8', (err) => {
    if (err) throw err;
    console.log('Data is Written to the file');
});

// read JSON file
fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) throw err;
    let employee = JSON.parse(data);
    console.log(employee);
});

