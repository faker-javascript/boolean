import boolean from './index.js';
import test from 'ava';

test('boolean return type to be boolean', t => {
	t.is(typeof boolean(), 'boolean');
});