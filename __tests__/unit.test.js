// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('test isPhoneNumber 1', () => {
	expect(functions.isPhoneNumber('(889) 758-9764')).toBe(true);
});

test('test isPhoneNumber 2', () => {
	expect(functions.isPhoneNumber('010-758-8741')).toBe(true);
});

test('test isPhoneNumber 3', () => {
	expect(functions.isPhoneNumber('510 - 75588741')).toBe(false);
});

test('test isPhoneNumber 3', () => {
	expect(functions.isPhoneNumber('(015) 758 -8741')).toBe(false);
});

test('isEmail 1', () => {
	expect(functions.isEmail('you@example.com')).toBe(true);
});

test('isEmail 2', () => {
	expect(functions.isEmail('michaelscott@ucsd.edu')).toBe(true);
});

test('isEmail 3', () => {
	expect(functions.isEmail('JerrySeinfeld@kr@mer.net')).toBe(false);
});

test('isEmail 4', () => {
	expect(functions.isEmail('billy Joel.com')).toBe(false);
});