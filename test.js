import test from 'ava';
import boolean from './index.js';

test('boolean return type to be boolean', t => {
    t.is(typeof boolean(), 'boolean');
});
