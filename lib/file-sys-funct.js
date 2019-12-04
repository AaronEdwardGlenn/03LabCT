const fs = require('fs').promises;

const makeItDIRPdrop = path =>{

    return fs.mkdir(path, { recursive: true }); 

};

    
module.exports = { makeItDIRPdrop }; 