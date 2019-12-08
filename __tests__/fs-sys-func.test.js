const fs = require('fs').promises;
const { makeItDIRPdrop, writeJSON, readJSON, updateJSON, readDirectoryJSON, deleteFile } = require('../lib/file-sys-funct');

describe('fs functions', () => {

    beforeAll(() => {
        return makeItDIRPdrop('./calvin');
    });
            
    describe('write JSON', () => {
        it('should turn an object to JSON and write to a file', () => {
            return writeJSON('./calvin/coolidge', {
                cool: true,
                num: 2
            })
                .then(() => {
                    return fs.readFile('./calvin/coolidge', 'utf8');
                })
                .then(contents => {
                    expect(JSON.parse(contents)).toEqual(({
                        cool: true,
                        num: 2
                    }
                    ));
                });
        });

    });

    describe('reading dat JaySOOOOOOOON', () => {
        it('will read the things', () => {
            return readJSON('./calvin/coolidge')
                .then(contents => {
                    expect(contents).toEqual({
                        cool: true,
                        num: 2
                    });
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
                    expect(fs.readFile).toHaveBeenLastCalledWith('./calvin/coolidge', 'utf8');
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

});

