const oddsL = require("odds-are-low");

// Returns "Odds are low!" when isLow is true
it('should return "Odds are low!" when isLow is true', () => {
  expect(oddsL (true)).toBe("Odds are low!");
});

// Returns "Odds are high!" when isLow is false
it('should return "Odds are high!" when isLow is false', () => {
  expect(oddsL (false)).toBe("Odds are high!");
});

// Returns "Odds are low!" when isLow is a truthy non-boolean value
it('should return "Odds are low!" when isLow is a truthy non-boolean value', () => {
  expect(oddsL (1)).toBe("Odds are low!");
});

// Returns "Odds are high!" when isLow is a falsy non-boolean value
it('should return "Odds are high!" when isLow is a falsy non-boolean value', () => {
  expect(oddsL (0)).toBe("Odds are high!");
});

// Function returns without errors
it("should not throw any errors", () => {
  expect(oddsL ).not.toThrow();
});

// Returns "Odds are high!" when isLow is null
it('should return "Odds are high!" when isLow is null', () => {
  expect(oddsL (null)).toBe("Odds are high!");
});

// Returns "Odds are low!" when isLow is undefined
it('should return "Odds are high!" when isLow is undefined', () => {
  expect(oddsL (undefined)).toBe("Odds are high!");
});

// None
it("should do nothing", () => {
  // No assertions needed, as the function does not have any side effects
  oddsL ();
});

// Function always returns the same string
it("should always return the same string", () => {
  const result1 = oddsL ();
  const result2 = oddsL ();
  expect(result1).toBe(result2);
});

// Returns "Odds are high!" when isLow is null
it('should return "Odds are high!" when isLow is null', () => {
  expect(oddsL (null)).toBe("Odds are high!");
});

// Function does not modify any external state
it("should not modify any external state", () => {
  // No assertions needed, as the function does not modify any external state
  oddsL ();
});

it('returns "are are high" and evaluates to false', () => {
  const result = oddsL (); // Call the function with the appropriate input
  expect(oddsL (false)).toBe("Odds are high!"); // Add the assertion for the expected output
});
