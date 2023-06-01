const bcrypt = require('bcryptjs');

let user = {
    name : 'John',
    email : 'john@gmail.com',
    password : 'john@123'
};
 // Convert password in HashCode
let salt = bcrypt.genSaltSync(10);
let hashedPassword = bcrypt.hashSync(user.password, salt);
    // console.log(`${user.password} --> ${hashedPassword}`);

let updatedUser = {
  ...user,  // Older folder existing Property
  password : 'New.John@123'
};
salt = bcrypt.genSaltSync(10);
let newHashedPassword = bcrypt.hashSync(updatedUser.password, salt);
// console.log(`\nOlder Password : ${user.password} :--> It's hashed Password : ${hashedPassword} \nUpdated Password : ${updatedUser.password} :--> Its new Hashed Password : ${newHashedPassword}`);

// Check Password
if (bcrypt.compareSync('New.John@123', newHashedPassword)){
    console.log('Password MATCHED, You have ENTERED the CORRECT Password');
}
else{
    console.log('Password is NOT MATCHED, You have ENTERED the WRONG Password');
}