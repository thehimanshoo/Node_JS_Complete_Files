// declare a function
let firstName = '';
let lastName = '';
let greet = (firstName, lastName) => {
    console.log(`Hello Mr. ${firstName} ${lastName}`);
};

// reverse String
let convertReverse = (str) => {
  let temp = '';
  for (let i= str.length-1; i>=0; i--){
      temp += str.charAt(i);
  }
  return temp;
};

// to export the functions
module.exports = {
    greet,
      convertReverse
};
