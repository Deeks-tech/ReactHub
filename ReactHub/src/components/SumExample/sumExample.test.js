import SumExample from "./SumExample";
import { sumUp } from "./sum";
import { expect, test } from "vitest";

test("adds two numbers correctly", () => {
  expect(sumUp(5, 5)).toBe(10);
});
