const sum = require('../modules/sum');

test('sum of 1 and 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('sum (with a negative) using -1 and 3 equals 2', () => {
    expect(sum(-1, 3)).toBe(2);
})

test('sum (with one value) using 3 equals 3', () => {
    expect(sum(3)).toBe(3);
})