const isValidParentheseString = require("./index");
 test("Returns a boolean", () => {
    expect(isValidParentheseString('()')).toBeTruthy();
    expect(isValidParentheseString('([)]')).toBeFalsy();
    expect(isValidParentheseString('{[]}')).toBeTruthy();
    expect(isValidParentheseString('()[]{}')).toBeTruthy();
});