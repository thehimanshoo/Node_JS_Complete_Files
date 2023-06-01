const jwt = require('jsonwebtoken');

let user = {
    id : 'abcd-101-asdf-15469824',
    name : 'John',
    email : 'john@gmail.com',  // Never-Ever store password inside the token
};

// Token can be created with Payload / information
let payload = {
  id : user.id,
  name : user.name
};
let secretKey = 'ssshhhh';  // We have now payload & secretKey so, that we generate a 'Token' for this particular user

// to generate a new token
let token = jwt.sign(payload, secretKey, {expiresIn : 3600});
console.log(token);

// to verify token
jwt.verify(token, secretKey, (err, decoded) => {
    if (err) throw err;
    console.log(decoded);
});