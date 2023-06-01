const path = require('path');
const fs = require('fs');

// Read the data from => (database/employees/employee.json)
fs.readFile(path.join(__dirname, 'database', 'employees', 'employee.json'), (err, data) => {
   if (err) throw err;
   // console.log(JSON.parse(data));

   let customers = JSON.parse(data);
   fs.writeFile(path.join(__dirname, 'util' , 'customer.json'), JSON.stringify(customers) , 'utf-8', (err) => {
      if (err) throw err;
      console.log('\nData is Written to a file => customer.json\n');
      console.log(customers);
   });

});