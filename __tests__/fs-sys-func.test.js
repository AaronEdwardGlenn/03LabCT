const fs = require('fs').promises;
const { makeItDIRPdrop, writeJSON, readJSON } = require('../lib/file-sys-funct');

describe('fs functions', () => {
    // describe('mkdirp', () => {
    //     it('should create directory and all parent directories', () => {
    //         return mkdirp('./this/is/it')
    //         .then()
    //         expect('yourMom');
    //     });
    // });
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
});
