const fs = require('fs').promises;
const { makeItDIRPdrop, writeJSON, readJSON, updateJSON, readDirectoryJSON, deleteFile } = require('../lib/file-sys-funct');

jest.mock('fs', () => ({
    promises: {
      mkdir: jest.fn(() => Promise.resolve()),
      writeFile: jest.fn(() => Promise.resolve()),
      readFile: jest.fn(() => Promise.resolve('{"name":"Calvin Coolidge"}')),
      readdir: jest.fn(() => Promise.resolve(['./calvin', './coolidge'])),
      unlink: jest.fn(() => Promise.resolve())
    }
  }));

  describe('mkdrpdrp', () => {
    it('should make a directory and all parent directories', () => { return makeItDIRPdrop('./calvin/coolidge')
      .then(() => {
        expect(fs.mkdir).toHaveBeenLastCalledWith('./calvin/coolidge', { recursive: true });
      });
    });
  });


    describe('write JSON', () => {
        const dog = {
            cool: true, 
            num: 2
        }; 

        it('should turn an object to JSON and write to a file', () => {
            return writeJSON('./calvin/coolidge', dog)
            .then(dog => {
                expect(fs.writeFile).toHaveBeenCalledWith('./calvin/coolidge', JSON.stringify(dog));
            });
        });

    });

    describe('reading dat JaySOOOOOOOON', () => {
        it('will read the things', () => {
            return readJSON('./calvin/coolidge')
            .then(() => {
                expect(fs.readFile).toHaveBeenLastCalledWith('./calvin/coolidge');
                    });
                });
        });
 

    describe('reading the files in a directory as objects', () => {
        it('will return the objects in the directory as objects', () => {
            
        });
    });

    describe('readDirectoryJSON', () => {
        it('read all files in a directory as objects', () => {
            return readDirectoryJSON('./calvin/coolidge')
                .then(allItems => {
                    expect(fs.readdir).toHaveBeenLastCalledWith('./calvin/coolidge');
                    expect(allItems).toEqual([
                        { name: 'Calvin Coolidge' },
                        { name: 'Calvin Coolidge' }
                    ]);
                });
        });
    });

    describe('updateJSON', () => {
        it('update a files JSON', () => {
            return updateJSON('./calvin/coolidge', { age: 69 })
                .then(updateItem => {
                    expect(fs.readFile).toHaveBeenLastCalledWith('./calvin/coolidge');
                    expect(updateItem).toEqual({ name: 'Calvin Coolidge', age: 69 });
                });
        });
    });

    describe('deleteFile', () => {
        it('deletes a file', () => {
            return deleteFile('./calvin/coolidge')
                .then(() => {
                    expect(fs.unlink).toHaveBeenLastCalledWith('./calvin/coolidge');
                });
        });
    });


