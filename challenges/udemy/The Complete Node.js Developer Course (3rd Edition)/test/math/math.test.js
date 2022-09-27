const math = require("./math")
test("Should convert 32 F to 0 C", () => expect(math.fahrenheitToCelsius(32)).toBe(0))
test("Should convert 0 C to 32 F", () => expect(math.celsiusToFahrenheit(0)).toBe(32))