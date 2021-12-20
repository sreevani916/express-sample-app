const add = require ("/.sample");

describe ("A simple test added",() => {
    it("it is used for demonstrative purpose", () =>
    {
        expect(add(2,11)).toEqual(13);
    });
}
 )