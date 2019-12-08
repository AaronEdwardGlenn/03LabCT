const uuid = require('uuid/v4');
const { makeItDIRPdrop,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
} = require('../lib/file-sys-funct.js');

module.exports = class Model {
  constructor(modelType, schema){
    this.modelType = modelType;
    makeItDIRPdrop(`./${modelType}`);
    this.filePath = `./${modelType}`;
    this.schema = schema;
    this.ids = [];
  }

  create(obj){
    const id = uuid();
    const validatedObj = this.schema.validate(obj);
    this.ids.push(id);
    writeJSON(`${this.filePath}/${id}`, validatedObj);
  }

  async findById(id){
    return await readJSON(`${this.filePath}/${id}`);
  }

  async find(){
    return await readDirectoryJSON(this.filePath);
  }

  async findByIdAndUpdate(id, obj){
    updateJSON(`${this.filePath}/${id}`, obj);
  }

  async findByIdAndDelete(id){
    deleteFile(`${this.filePath}/${id}`);
  }
};