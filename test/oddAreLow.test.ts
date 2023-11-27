// const oddsAreLow = require("odds-are-low");
// Returns "Odds are low!" when isLow is true
import { it, suite, test } from "vitest";
import { oddsAreLow } from "../index";

suite("oddsAreLow Function Tests", () => {
  // Test case 1
  test('returns "Odds are low!" when isLow is true', () => {
    const result = oddsAreLow(true);
    return result === "Odds are low!";
  });

  // Test case 2
  test('returns "Odds are high!" when isLow is false', () => {
    const result = oddsAreLow(false);
    return result === "Odds are high!";
  });


});
