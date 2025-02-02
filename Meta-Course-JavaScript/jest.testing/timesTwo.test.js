const timesTwo = require('./timesTwo');

// Teste: verifica se o retorno é o número multiplicado por 2
test("returns the number times 2", () => {
    expect(timesTwo(10)).toBe(20);
});
