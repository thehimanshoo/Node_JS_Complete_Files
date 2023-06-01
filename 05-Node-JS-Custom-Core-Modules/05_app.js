const store = require('./database/store/dataStore');
const util = require('./util/utility');

// call function
/*
let employeeList = store.getAllEmployee();
console.log(employeeList);
*/

store.getAllEmployee((employees) => {
    console.log(employees);
    let fileName = 'customer.json';
    util.writeToFile(fileName, JSON.stringify(employees));
});