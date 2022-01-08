import fakeBoolean from './index.js';
import test from 'ava';

test('fakeBoolean return type to be boolean', t => {
	t.is(typeof fakeBoolean(), 'boolean');
});