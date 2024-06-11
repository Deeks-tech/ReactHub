import { expect, test, describe } from "vitest";
import stringTest from "./stringTest";

describe("stringTest function", () => {
  describe("valid strings", () => {
    test("should return true for lowercase strings", () => {
      expect(stringTest("craig")).toBe(true);
    });
    test("should reutn true for numbers", () => {
      expect(stringTest(1234)).toBe(true);
    });
    test("should return true for lowercase and numbers", () => {
      expect(stringTest("123craig")).toBe(true);
    });
  });

  describe("invalid", () => {
    test("should return error message", () => {
      expect(stringTest("Craig")).toBe("error");
    });
    test("should return error for special characters", () => {
      expect(stringTest("craig!")).toBe("error");
    });
  });
});
