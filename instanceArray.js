/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

var users = []//Create an Array called 'users' that will store all our instances of User.

  //code here
var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

users.push(tyler, cahlan, lenny)  //code here

console.log('Tyler\'s information is ' );
//Console.log all of Tylers information

  console.log(tyler)//code here

console.log('Lenny\'s information is ' );
//Now console.log all of Lennys information

  console.log(lenny)//code here


//Now create another instance of User using your own information and then add that to your users array.

  var brennan = new User('Brennan', 'brenbomb12@aol.com', '123456')
 users.push(brennan)
  //code here

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.
for (i = 0; i < users.length; i++){
  console.log(users.name[i])
}
  //code here
