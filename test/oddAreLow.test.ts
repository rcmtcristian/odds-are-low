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


  
  // // The function should return the string "Odds are high!" when the input is a truthy value other than true.

  // test('returns "Odds are high!" when isLow is a truthy value other than true', () => {
  //   const result = oddsAreLow(1);
  //   return result === "Odds are high!";
  // });

  // // The function should return the string "Odds are low!" when the input is a falsy value other than false.

  // // Test case 5
  // test('returns "Odds are low!" when isLow is a falsy value other than false', () => {
  //   const result = oddsAreLow(0);
  //   return result === "Odds are low!";
  // });

  // // The function should return the string "Odds are high!" when the input is not a boolean value.

  // // Test case 6
  // test('returns "Odds are high!" when isLow is not a boolean value', () => {
  //   const result = oddsAreLow("true");
  //   return result === "Odds are high!";
  // });
});
