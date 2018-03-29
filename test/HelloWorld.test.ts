import { should } from 'chai';
import { HelloWorld } from '../src/HelloWorld';

should();

describe('Hello World test suite', function() {
    it('Can say Hello World', function(done) {
        const expected = 'Hello World!';
        const result = new HelloWorld().helloWorld();
        result.should.equals(expected, `Should return: ${expected}, but returned: ${result}`);
        done();
    });
});