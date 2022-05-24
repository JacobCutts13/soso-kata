import fizzbuzz from "./fizzbuzz";

test("This funciton returns an array with certain values replaced depending on certain conditions", () => {
  expect(fizzbuzz(4)).toStrictEqual([1, 2, "Fizz", 4]);
  expect(fizzbuzz(5)).toStrictEqual([1, 2, "Fizz", 4, "Buzz"]);
  expect(fizzbuzz(15)).toStrictEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
});
