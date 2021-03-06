//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

function QuizUser(name, email, password, totalScore){
  this.name = name;
  this.email = email;
  this.password = password;
  this.totalScore = totalScore;
}  //code here


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  function Question(title, answersArray, rightAnswer, difficulty) {
    this.title = title;
    this.answersArray = answersArray;
    this.rightAnswer = rightAnswer
    this.difficulty = difficulty;
  }//code here


//Create a quizUsers Array which is going to hold all of our users.

  var quizUsers = []//code here


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  var brett = new QuizUser('Brett', 'brett@gmail.com', '123', '80')
  var dillon = new QuizUser('Dillon', 'dildog@yahoo.com', '456', '85')
  var colt = new QuizUser('Colton', 'coltino@ymail.com', '789', '90')//code here

quizUsers.push(brett, dillon, colt)
//Create a questions Array which is going to hold all of our questions

  var questions = []//code here


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

var question1 = ['T/F: Inheritance is achieved in JavaScript through Prototypes?']
var question2 = ['T/F: JavaScript is just a scripting version of Java']
var question3 = ["T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"]  //code here


//Now push all of your instances of Question into the questions Array

  questions.push(question1, question2, question3)//code here

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  for (var i = 0; i < questions.length; i++){
    console.log(questions[i])
  }

  for (var i = 0; i < quizUsers.length; i++){
    console.log(quizUsers[i])
  }//code here
