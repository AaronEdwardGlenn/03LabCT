const fsFunc = require('../lib/fs-functions');
const Schema = require('../lib/Schema');
const Model = require('../lib/Model');

jest.mock('../lib/fs-functions.js', () => ({
  mkdirp: jest.fn(() => Promise.resolve()),
  writeJSON: jest.fn(() => Promise.resolve())
}));

describe('Model', () => {
  it('creates a directory for a Model', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String
      }
    });

    const Dog = new Model('Dog', schema);
    return Dog.init()
      .then(() => {
        expect(fsFunc.mkdirp).toHaveBeenCalledWith('./Dog');
      })
  });

  it('creates a new dog', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String
      }
    });

    const Dog = new Model('Dog', schema);
    return Dog.init()
      .then(() => {
        return Dog.create({
          name: 'spot',
          age: 5,
          weight: '20 lbs'
        });
      })
      .then(() => {
        expect(fsFunc.writeJSON).toHaveBeenCalledWith('./Dog/randomID', {
          name: 'spot',
          age: 5,
          weight: '20 lbs'
        });
      });
  });
});
