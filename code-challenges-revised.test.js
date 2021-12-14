// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

// 1a) Pseudo code:
// Create describe, it, and expect statements to describe the problem statement
// Add appropriate inputs/outputs, with one expect line per input/output pair
// Run the test on terminal (yarn jest) prior to creating the function to ensure it turns red (note: if set up correctly, should get an error saying the function is not defined)

describe("divisibleByThree", () => {
    it("a function that takes in a number argument and determines if it is evenly divisible by 3", () => {
      expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
      expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
      expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")
    })
  })

// b) Create the function that makes the test pass.

// 2b) Pseudo code:
// Declare a function and name it divisibleByThree (const declaration)
// Name the parameter as num
// Declare a variable named statement (let declaration)
// Create an if statement to evaluate the number and create different outputs
// if statement logic (use ternary operator):
  // if mod3 of the argument is equal to zero, return a string saying the argument is divisible by three
  // if false, return a string saying the arguent is divisible by three
// Run the test in terminal to see if the test turns green

const divisibleByThree = (num) => {
    let statement
    num % 3 === 0 ? statement = `${num} is divisible by three` : statement = `${num} is not divisible by three`
    return statement
}

// Notes: I initially did this problem incorrectly. I apparently misread the prompt and solved an entirely different problem, even inventing my own inputs (I think I may have pasted in the test code from a previous problem, and then thought I was solving that previous problem with those previous inputs). I wanted to go back and solve this the right way. I initially ran the test and got a red result (function not defined). Then I created the code which got the test to pass green. As for refactoring, I could potentially do a switch statement here instead. I feel like ternary operators look cleaner though, so I stuck with them instead.

// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// // 2a) Pseudo code
// // Create describe, it, and expect statements to describe the problem statement
// // Add appropriate inputs/outputs, with one expect line per input/output pair
// // Run the test on terminal (yarn jest) prior to creating the function to ensure it turns red (note: if set up correctly, should get an error saying the function is not defined)

// describe("capitalizer", () => {
//     it("a function that takes in an array with strings and return another array with all strings capitalized", () => {
//       expect(capitalizer(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//       expect(capitalizer(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//     })
//   })

// // b) Create the function that makes the test pass.

// // 2b) Pseudo code:
// // Declare a function and name it capitalizer (const declaration)
// // Name the parameter as array
// // Create a return statement which uses HOF .map() to create a new array
// // .map() logic
//   // value.slice(0, 1).toUpperCase() + value.slice(1, value.length) (this will concatenate the slice of the first letter and then add in the rest of the string via slice)

// const capitalizer = (array) => {
//     return array.map(value => 
//         value.slice(0, 1).toUpperCase() + value.slice(1, value.length))
//     }

// // 2) Notes: Ran the code w/o a function and it was red. I added the function in and ran the test, got it passing after a few tries. For refactoring, I think .map() is probably the most efficient method to use. I could use either a for loop or .forEach(), but both of these methods seem like they would take considerably more code. I could also potentially split() the array, concatenate and slice as seen above, and then .join() the result. But this also seems like it'd be less efficient than .map(), which was specifically created for this purpose.


// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

// var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "academy"
// // Expected output: 0
// var vowelTester3 = "challenges"
// // Expected output: 2

// // 3a) Pseudo code: 
// // Create describe, it, and expect statements to describe the problem statement
// // Add appropriate inputs/outputs, with one expect line per input/output pair
// // Run the test on terminal (yarn jest) prior to creating the function to ensure it turns red (note: if set up correctly, should get an error saying the function is not defined)

// describe("vowelOfEnmity", () => {
//     it("a function that takes in a string, searches for the first vowel in the string (if there is one), and returns the index of said vowel", () => {
//       expect(vowelOfEnmity(vowelTester1)).toEqual(1)
//       expect(vowelOfEnmity(vowelTester2)).toEqual(0)
//       expect(vowelOfEnmity(vowelTester3)).toEqual(2)
//     })
//   })

// // b) Create the function that makes the test pass.

// // 3b) Pseudo code: 
// // Declare a function and name it vowelOfEnmity (const declaration)
// // Name the parameter as string
// // Create a variable named vowelArr, and initialize it as an empty array (let declaration)
// // Create several conditional statements, each of which finds the index of one of the vowels via .indexOf(), and if the result isn't -1, will .push each one into variable vowelArr
// // Use Math.min(VowelArr) to find the lowest value within vowelArr and return the result

// // const vowelOfEnmity = (string) => {
// //     let vowelArr = []
// //     if(string.indexOf("a") !== -1){
// //         vowelArr.push(string.indexOf("a"))
// //     }
// //     if(string.indexOf("e") !== -1){
// //         vowelArr.push(string.indexOf("e"))
// //     }
// //     if(string.indexOf("i") !== -1){
// //         vowelArr.push(string.indexOf("i"))
// //     }
// //     if(string.indexOf("o") !== -1){
// //         vowelArr.push(string.indexOf("o"))
// //     }
// //     if(string.indexOf("u") !== -1){
// //         vowelArr.push(string.indexOf("u"))
// //     }
// //     return (vowelArr.sort())[0]
// //}
// const vowelOfEnmity = (string) => {
//     let vowelArr = []
//     string.indexOf("a") !== -1 ? vowelArr.push(string.indexOf("a")) : null
//     string.indexOf("e") !== -1 ? vowelArr.push(string.indexOf("e")) : null
//     string.indexOf("i") !== -1 ? vowelArr.push(string.indexOf("i")) : null
//     string.indexOf("o") !== -1 ? vowelArr.push(string.indexOf("o")) : null
//     string.indexOf("u") !== -1 ? vowelArr.push(string.indexOf("u")) : null
//     return (vowelArr.sort())[0]
// }

// // Notes: I initially ran the code w/o the function and it was red as expected. Got the code to work and got a passing green test. I then changed the conditionals to use ternary operators, which makes the code look much cleaner. In terms of refactoring this code seems pretty concise. I could make the function include capital vowels too. But given that the three outputs are all lower case, I didn't think it was necessary and would make the code bulkier.