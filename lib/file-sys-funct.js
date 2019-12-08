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

const readDirectoryJSON = path => {
    return fs.readdir(path)
      .then(files => {
        const promiseToReadAllJSON = files.map(file => {
          return readJSON(`${path}/${file}`);
        })
        return Promise.all(promiseToReadAllJSON);
      })
  };
  
  const updateJSON = async (path, action) => {
    const oldObj = await readJSON(path);
    const newObj = { ...oldObj, ...action };
  
    await writeJSON(path, newObj);
  
    return newObj;
  };

const deleteFile = async (path) => {
    const JSON = await readJSON(path);
    await fs.unlink(path);

    return JSON; 
};


    
module.exports = { makeItDIRPdrop, writeJSON, readJSON, readDirectoryJSON, updateJSON, deleteFile }; 

