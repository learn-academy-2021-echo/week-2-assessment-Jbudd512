// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
console.log(cohort.split(""))

// a) Your answer: I think it'll return an array with each character in the string being stored as an element
// b) Verify and explain: It returned the array


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: I think it'll show undefined because there is no return inside the function
// b) Verify and explain: It returned undefined


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: I think this will return another array with the values from multBy2, but multiplied by 2
// b) Verify and explain: It returned the array


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: I think this will show a new array with only the odd values from onlyOdds
// b) Verify and explain: It returned the array


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: I think this will return the string "Javascript"
// b) Verify and explain: It returned "Javascript"


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: I think it should return an object with the following key value pairs: student: "George", cohort: "Delta", year: 2021
// b) Verify and explain: It returned the object
