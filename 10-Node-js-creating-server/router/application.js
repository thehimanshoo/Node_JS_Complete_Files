const fs = require('fs');
const path = require('path');

let mapRoutes = (request , response) => {
    // to move the server to the given written page
    let url = request.url;
    if (url === '/'){
        fs.readFile(path.join(__dirname, '..', 'views', 'index.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        });
    }
    else if (url === '/about'){
        fs.readFile(path.join(__dirname, '..', 'views', 'about.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        });
    }
    else if (url === '/contact'){
        fs.readFile(path.join(__dirname, '..', 'views', 'contact.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        });
    }
    else if (url === '/service'){
        fs.readFile(path.join(__dirname, '..', 'views', 'service.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        });
    }
    else{
        fs.readFile(path.join(__dirname, '..', 'views', '404.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        });
    }
};

// Exporting the file to main and Calling the function
module.exports = {
    mapRoutes
};





