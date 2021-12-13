# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter is basically a variable which is used inside a function to create logic. The argument is what is passed into a function whenever it is invoked, and will be substituted into any place where the parameter was written.

  Researched answer: According to MDN, function parameters are the names used in a function's definition, while arguments the real values passed into the function. Parameters are initialized to the values supplied by the arguments.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: .map() uses three predefined parameters: value, index, and array. The index and array are both optional.

  Researched answer: According to MDN, value is actually called element, even though we reference it as value. I suppose it's essentially the same thing though. But the three parameters are element, index, and array, with index and array being optional.



3. What is object destructuring?

  Your answer: Object destructuring is when you define a variable in terms of other properties inside of a particular object.

  Researched answer: According to the syllabus, object destructuring is when you define variables which break down the properties of an object. It's a way to basically create a variable which can reference properties inside the object. It allows you to unpack values in an object. 


4. What is the difference between a function and a method?

  Your answer: I legitimately can't remember the answer. I know Sarah gave a super in depth explanation, but I don't remember it. I would say only methods are pre-assigned in Javascript, but there are higher order functions which are more or less pre-assigned as well. I guess methods are generally associated with objects, while functions may or may not be (ie they can operate on objects).

  Researched answer: A method is a function which belongs to an object. Functions can be called directly using their names, while methods must be called by referencing their associated object. Data passed to functions is explicit, while data passed to a method is implicitly passed onto the associated object.



5. What is the difference between a class and an object?

  Your answer: A class is used to create objects by populating them with pre-defined properties and methods (can be dynamic or hard coded, depending on whether or not parameters are given). An object is a data structure which has more degrees of freedom than an array.

  Researched answer: According to MDN, classes are templates used for creating objects. Side note: Apparently classes must be defined before they can be constructed. Objects are data structures which store data using key-value pairs.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting is when you scan your document for certain variables prior to executing the actual code (anything declared with const or let). These variables are then "hoisted" into the top of the document. This is done so that you can write tests which can invoke the functions you are testing without having to worry about the placement of these functions in the code.

  Researched answer: Hoisting is when variables declared with let or const are hoisted to the top of the block, though they are not apparently initialized. This doesn't just apply to tests, this is a generally thing for javascript. But it allows for variables to be used prior to them being declared in the code.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Class inheritence is when you use the super() method to access properties stored inside a parent class. This applies to when a parent class is used to create a new class, which is done by using the extends keyword inside the new class and referencing the parent class.

2. React: React is a front-end Javascript library which is used to create advanced UI/UX. It uses HTML-in-Javascript syntax called JSX. It is apparenlty used in tandem with ReactDOM, which provides DOM-specific methods which are used as a means to get outside of the React model if needed. I don't understand what DOM means yet, but it is one of the looking ahead questions.

3. React state: A react state is a Javascript object used to represent information about the component's current situation. Changes to the state are done through setState().

4. React lifecycle methods: React lifecycle methods are used at various points of the React lifecycle, which is divided into three phases: Mounting, updating, and unmounting. Some of these methods include constructor(), render(), componentDidMount(), and componentDidUnmount().

5. DOM: DOM stands for Document Object Model. It is a programming interface for web documents. It turns HTML or XML documents into tree structures, which allows them to be manipulated. 