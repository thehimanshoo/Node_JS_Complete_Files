const dotenv = require('dotenv');

// configure the config file
dotenv.config({path: './config/config.env'});

// to read data form env file
console.log(process.env);  // process is a global variable of node-js, its a pre-defined variable it uses to access some file to config
let devURL = process.env.DEV_URL;
console.log(`DEV URL : ${devURL}`);

// to access mongoDb Local
let mongoLocal = process.env.MONGO_DB_LOCAL;
console.log(`MONGO_DB_LOCAL :  ${mongoLocal}`);

// to access secret key
let secretKey = process.env.JWT_WEB_SECRET;
console.log(`JWT Secret Key : ${secretKey}`);