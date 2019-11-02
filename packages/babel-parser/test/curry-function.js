import { parse } from "../lib";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("curry function syntax", () => {
  it("should parse", () => {
    expect(getParser("function @@ foo(){}")()).toMatchSnapshot();
  });
});
