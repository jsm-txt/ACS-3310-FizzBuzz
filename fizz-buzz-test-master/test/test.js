const expectExport = require("expect")
const fb = require("../fizzbuzz")

test('Sanity check', () => {
  expect(true).toBe(true)
})

test('Constant Test', () =>{
  expect(fb.FIZZ).toStrictEqual("fizz")
  expect(fb.BUZZ).toStrictEqual("buzz")
  expect(fb.FIZZBUZZ).toStrictEqual("fizzbuzz")
})

test('isFizzyTest', () => {
  expect(fb.isFizzy(9)).toBe(true)
  expect(fb.isFizzy(2)).toBe(false)
})

test('isBuzzyTest', () => {
  expect(fb.isBuzzy(9)).toBe(false)
  expect(fb.isBuzzy(2)).toBe(false)
  expect(fb.isBuzzy(10)).toBe(true)
  expect(fb.isBuzzy(25)).toBe(true)
})

test('fizzBuzzyTest', () => {
  expect(fb.fizzyBuzzy(9)).toBe("fizz")
  expect(fb.fizzyBuzzy(12)).toBe("fizz")
  expect(fb.fizzyBuzzy(10)).toBe("buzz")
  expect(fb.fizzyBuzzy(15)).toBe("fizzbuzz")
})

test('fizzBuzzTest', () => {
  expect(fb.fizzBuzz(9)).toStrictEqual({"buzz": 1, "count": 9, "fizz": 3, "fizzBuzz": 0})
  expect(fb.fizzBuzz(12)).toStrictEqual({"buzz": 2, "count": 12, "fizz": 4, "fizzBuzz": 0})
  expect(fb.fizzBuzz(10)).toStrictEqual({"buzz": 2, "count": 10, "fizz": 3, "fizzBuzz": 0})
  expect(fb.fizzBuzz(35)).toStrictEqual({"buzz": 5, "count": 35, "fizz": 9, "fizzBuzz": 2})
})