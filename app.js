//storing my questions in an array called questions\
var questions = [
  ["How many states are there?" , 50],
  [" How many legs does a cat have?" ,4 ],
  ["How many eyes do humans have?" , 2]
];

var correctAnswers = 0;  //keep track of the number of correct answers
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

//creating a function we will use to print everything onto the webpage at the end
function print(message) {
 var outputDiv = document.getElementById('output');
 outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
    
  }
  listHTML += '</ol>';
  return listHTML;
}

//setup for looping through each question in the questions array
for(var i = 0; i < questions.length; i += 1){
  question = questions[i][0]; //captures the question i is element at outer array , 0 is element at the first position  
  answer = questions[i][1]; // captures the answer from the questions array at the outer array i and grabs the answer at position 1
  response = prompt(question); //using prompt will ask from the question variable each question at the given position until the loop ends
  response = parseInt(response); //converts the return value from prompt from string to number and then stores bit back into the response variable
  if(response === answer){
    correctAnswers +=1;
  correct.push(question);
  
  } else {
  wrong.push(question);
  }  
}

html =  "You got " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);
