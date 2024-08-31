const index = require("../index (1).js");

describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;

  // at before all assign pos vals with array of positive numbers,

  // and assign negative vals with negative array of numbers,

  // assign vals to pos_vals.concat(neg_vals);

  // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));

  // at before each console.log all vals

  // at after each console.log done

  // at after all set all variables to 0

  beforeAll(() => {
    pos_vals = [1, 2, 3, 4, 5];
    neg_vals = [-1, -2, -3, -4, -5];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
  });

  beforeEach(() => {
    console.log("Values:", vals);
  });

  afterEach(() => {
    console.log("Done");
  });

  afterAll(() => {
    pos_vals = [];
    neg_vals = [];
    vals = [];
    sum_of_vals = 0;
  });

  it("sum function should equal to sum of the values", () => {
    const res = index.sum(vals);
    expect(res).toBe(sum_of_vals);
  });

  it("positive function should equal to positive values", () => {
    const res = index.positive(vals);
    expect(res).toEqual(pos_vals);
  });
});
