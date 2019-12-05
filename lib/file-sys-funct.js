const fs = require('fs').promises;

const makeItDIRPdrop = path =>{

    return fs.mkdir(path, { recursive: true }); 
    
};

const writeJSON = (path, obj) => {
    return fs.writeFile(path, JSON.stringify(obj))
        .then(() => obj);
};

const readJSON = (path) => {
    return fs.readFile(path)
        .then(contents => JSON.parse(contents));
};



    
module.exports = { makeItDIRPdrop, writeJSON, readJSON }; 

