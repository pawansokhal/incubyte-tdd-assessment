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

    it('should handle delimeters', () => {
        let result = add("//;\n1;;2;;5");
        expect(result).toBe(8);
    });

    it('should handle delimiters of any length', () => {
        let result = add("//[***]\n1***2***3");
        expect(result).toBe(6);
    });

    it('should handle delimiters with multiple characters and mixed delimiters', () => {
        let result = add("//[*][%]\n1*2%3");
        expect(result).toBe(6);
    });

    it("should throw an error when a negative number is encountered", function () {
        expect(() => add("-1,2,-4")).toThrowError("Negative numbers not allowed: -1, -4");
    });
});