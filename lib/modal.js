const fs = require('fs').promises;
const { makeItDIRPdrop, writeJSON, readJSON, readDirectoryJSON } = require('../lib/file-sys-funct');
const uuid = require('uuid/v4');



module.exports = class Model {
    constructor(modelName, modelSchema) {
        this.modelName = modelName;
        makeItDIRPdrop(`./${modelName}`);
        this.filePath = `./${modelName}`;
        this.itemIds = [];
    }

    init() {
        return mkdirp(`./${this.modelName}`);
      }
    
      create(obj) {
        const id = uuid();
        const validatedObj = this.schema.validate(obj);
        return writeJSON(`${this.modelName}/${id}`, { ...validatedObj, id });
      }

    async findById(modelId) {
        return readJSON(this.filePath + `/${modelId}`);
    }
    
    


};