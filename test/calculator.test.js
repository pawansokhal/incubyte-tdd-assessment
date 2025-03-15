const add = require('../calculator')


describe('String Calculator', () => {

    it('should return 0 for an empty string', () => {
        let result = add("");
        expect(result).toBe(0);
    })

})