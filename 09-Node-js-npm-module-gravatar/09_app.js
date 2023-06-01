const avatar = require('gravatar');

let user = {
    name : 'Naveen Saggam',
    email : 'thenaveensaggam@gmail.com',
    password : '1234'
};

let avatarURL = avatar.url(user.email, {
    s : 400,        // 'S' denotes the size of the pic... which is 400 px
    r : 'pg',       // 'r' denotes the
    d : 'mm'

});