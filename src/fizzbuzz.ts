/**
 * Adds together two numbers
 * function name fizzbuzz
 * @param a(number) - The number of things to add to the array
 * @returns array of number from 1 to a
 PSUEDOCODE
 initialise OUTPUT_ARRAY to be an empty array
 for each index starting from index=1 to index=a
    if INDEX is a multiple of 3 and 5
      OUTPUT_ARRAY push("FizzBuzz")
    ELSE if INDEX is a multiple of 3
      OUTPUT_ARRAY push("Fizz")
    ELSE if INDEX is a multiple of 5
      OUTPUT_ARRAY push("Buzz") ---> add buzz to end of array
    ELSE
      OUTPUT_ARRAY.push(INDEX)
 END for
 return OUTPUT_ARRAY

 */
function fizzbuzz(a: number): (string | number)[] {
  let outputArray = [];
  for (let i = 1; i <= a; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      outputArray.push("FizzBuzz");
    }
    else if (i % 3 === 0) {
      outputArray.push("Fizz");
    }
    else if (i % 5 === 0) {
      outputArray.push("Buzz");
    }
    else {
      outputArray.push(i)
    }
  }
  return outputArray;
}

export default fizzbuzz;
