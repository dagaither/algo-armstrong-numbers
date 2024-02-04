const findArmstrongNumbers = require("./armstrongNumbers");

describe('findArmstrongNumbers', () => {
    test('findArmstrongNumbers([1, 2, 3, 4, 5]) == [1, 2, 3, 4, 5]', () => {
        expect(findArmstrongNumbers([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    });
    test('findArmstrongNumbers([258, 315, 370, 371, 399, 407]) == [370, 371, 407]', () => {
        expect(findArmstrongNumbers([258, 315, 370, 371, 399, 407])).toStrictEqual([370, 371, 407]);
    });
});
