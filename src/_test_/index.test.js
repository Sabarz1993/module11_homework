import {sum, reverseStr, getPercents, getMonth} from '../index.js';

describe(
    "test index-1",
    () => {
    it('adds 1 + 2 to equal 3', () => {
        const result1 = sum (1,2);
        expect(result1).toBe(3);
    }),
    it('get reverse String', () => {
        const result2 = reverseStr ("1234");
        expect(result2).toBe("4321");
    }),
    it('get percents of Number', () => {
        const percent10 = getPercents (10,100);
        const percent0 = getPercents (0,100);
        expect(percent10).toBe(10);
        expect(percent0).toBe(0);
    }),
    it('get month depends of his number in year', () => {
        const month1 = getMonth (1);
        const month13 = getMonth (13);
        expect(month1).toBe("январь")
        expect(month13).toBe("неизвестно")
    })
});