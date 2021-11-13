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

test('test isPhoneNumber 4', () => {
	expect(functions.isPhoneNumber('(015) 758 -8741')).toBe(false);
});


test('test isEmail 1', () => {
	expect(functions.isEmail('you@example.com')).toBe(true);
});

test('test isEmail 2', () => {
	expect(functions.isEmail('michaelscott@ucsd.edu')).toBe(true);
});

test('test isEmail 3', () => {
	expect(functions.isEmail('JerrySeinfeld@kr@mer.net')).toBe(false);
});

test('test isEmail 4', () => {
	expect(functions.isEmail('billy Joel.com')).toBe(false);
});


test('test isHexColor 1', () => {
	expect(functions.isHexColor('#E9E098')).toBe(true);
});

test('test isHexColor 2', () => {
	expect(functions.isHexColor('#000000')).toBe(true);
});

test('test isHexColor 3', () => {
	expect(functions.isHexColor('#E9E09890')).toBe(false);
});

test('test isHexColor 4', () => {
	expect(functions.isHexColor('#color')).toBe(false);
});


test('test isDate 1', () => {
	expect(functions.isDate('11/13/2021')).toBe(true);
});

test('test isDate 2', () => {
	expect(functions.isDate('5/13/2019')).toBe(true);
});

test('test isDate 3', () => {
	expect(functions.isDate('011/05/2021')).toBe(false);
});

test('test isDate 4', () => {
	expect(functions.isDate('04/AA/2020')).toBe(false);
});


test('test isStrongPassword 1', () => {
	expect(functions.isStrongPassword('Apple_33')).toBe(true);
});

test('test isStrongPassword 2', () => {
	expect(functions.isStrongPassword('CSE110lab8_')).toBe(true);
});

test('test isStrongPassword 3', () => {
	expect(functions.isStrongPassword('123')).toBe(false);
});

test('test isStrongPassword 4', () => {
	expect(functions.isStrongPassword(' ')).toBe(false);
});

