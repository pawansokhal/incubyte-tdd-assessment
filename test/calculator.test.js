const add = require('../calculator');


describe('String Calculator', () => {

    it('should return 0 for an empty string', () => {
        let result = add("");
        expect(result).toBe(0);
    });

    it('should return number itself for single number', () => {
        let result = add("5");
        expect(result).toBe(5);
    });

    it('should return sum of numbers seperated by commas', () => {
        let result = add("5,1");
        expect(result).toBe(6);
    });

    it('should return sum of numbers seperated by commas or new line', () => {
        let result = add("5,\n2");
        expect(result).toBe(7);
    });
});