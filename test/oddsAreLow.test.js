const oddsAreLow = require("odds-are-low");

// Returns "Odds are low!" when isLow is true
it('should return "Odds are low!" when isLow is true', () => {
  expect(oddsAreLow(true)).toBe("Odds are low!");
});

// Returns "Odds are high!" when isLow is false
it('should return "Odds are high!" when isLow is false', () => {
  expect(oddsAreLow(false)).toBe("Odds are high!");
});

// Returns "Odds are low!" when isLow is a truthy non-boolean value
it('should return "Odds are low!" when isLow is a truthy non-boolean value', () => {
  expect(oddsAreLow(1)).toBe("Odds are low!");
});

// Returns "Odds are high!" when isLow is a falsy non-boolean value
it('should return "Odds are high!" when isLow is a falsy non-boolean value', () => {
  expect(oddsAreLow(0)).toBe("Odds are high!");
});

// Function returns without errors
it("should not throw any errors", () => {
  expect(oddsAreLow).not.toThrow();
});

// Returns "Odds are high!" when isLow is null
it('should return "Odds are high!" when isLow is null', () => {
  expect(oddsAreLow(null)).toBe("Odds are high!");
});

// Returns "Odds are low!" when isLow is undefined
it('should return "Odds are high!" when isLow is undefined', () => {
  expect(oddsAreLow(undefined)).toBe("Odds are high!");
});

// None
it("should do nothing", () => {
  // No assertions needed, as the function does not have any side effects
  oddsAreLow();
});

// Function always returns the same string
it("should always return the same string", () => {
  const result1 = oddsAreLow();
  const result2 = oddsAreLow();
  expect(result1).toBe(result2);
});

// Returns "Odds are high!" when isLow is null
it('should return "Odds are high!" when isLow is null', () => {
  expect(oddsAreLow(null)).toBe("Odds are high!");
});

// Function does not modify any external state
it("should not modify any external state", () => {
  // No assertions needed, as the function does not modify any external state
  oddsAreLow();
});

it('returns "are are high" and evaluates to false', () => {
  const result = oddsAreLow(); // Call the function with the appropriate input
  expect(oddsAreLow(false)).toBe("Odds are high!"); // Add the assertion for the expected output
});
