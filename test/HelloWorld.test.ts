import { should } from 'chai';
import { HelloWorld } from '../src/HelloWorld';

should();

describe('Hello World test suite', function() {
    it('Can say Hello World', function(done) {
        const expected = 'Hello World!';
        const result = new HelloWorld("").helloWorld();
        console.log(`Returned: ${result}`);
        result.should.equals(expected, `Should return: ${expected}, but returned: ${result}`);
        done();
    });

    it('Can add to Z', function() {
        const expected = 150;
        const result = new HelloWorld("").addToZ(20, 30);
        console.log(`Returned: ${result}`);
        result.should.equals(expected, `Should return: ${expected}, but returned: ${result}`);
    });
});
