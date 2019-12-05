const fs = require('fs').promises;
const { makeItDIRPdrop, writeJSON } = require('../lib/file-sys-funct');

describe('fs functions', () => {
    // describe('mkdirp', () => {
    //     it('should create directory and all parent directories', () => {
    //         return mkdirp('./this/is/it')
    //         .then()
    //         expect('yourMom');
    //     });
    // });
    beforeAll(() => {
        return makeItDIRPdrop('./it/got');
    });
            
    describe('write JSON', () => {
        it('should turn an object to JSON and write to a file', () => {
            return writeJSON('./it/got/thing', {
                cool: true,
                num: 2
            })
                .then(() => {
                    return fs.readFile('./it/got/thing', 'utf8');
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
});
