const add = require ("/.sample");

describe ("A simple test added",() => {
    it("it is used for demonstrative purpose", () =>
    {
        expect(add(2,5)).toEqual(7);
    });
}
 )