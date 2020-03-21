const getBudgets = require("./getBudget");

test("Test 1", () => {
  expect(getBudgets([{
    name: "John",
    age: 21,
    budget: 23000
  }, {
    name: "Steve",
    age: 32,
    budget: 40000
  }, {
    name: "Martin",
    age: 16,
    budget: 2700
  }])).toBe(65700);
});

test("Test 2", () => {
  expect(getBudgets([{
    name: "John",
    age: 21,
    budget: 29000
  }, {
    name: "Steve",
    age: 32,
    budget: 32000
  }, {
    name: "Martin",
    age: 16,
    budget: 1600
  }])).toBe(62600);
});

test("Test 3", () => {
  expect(getBudgets([{
    name: "John",
    age: 21,
    budget: 19401
  }, {
    name: "Steve",
    age: 32,
    budget: 12321
  }, {
    name: "Martin",
    age: 16,
    budget: 1204
  }])).toBe(32926);
});

test("Test 4", () => {
  expect(getBudgets([{
    name: "John",
    age: 21,
    budget: 10234
  }, {
    name: "Steve",
    age: 32,
    budget: 21754
  }, {
    name: "Martin",
    age: 16,
    budget: 4935
  }])).toBe(36923);
});
