/*


Challenge Instructions

Ask at least five questions

Keep track of the number of questions the user answered correctly

Provide a final message after the quiz letting the user know the number of questions he or she got right.

Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.

Try to use as many things we have learned so far as possible!


*/

// Variable to keep track of how many questions are answered correctly.
var correct = 0;
//Question 1
var answerOne = prompt( "What is the name of the Master Chief's blue sidekick?" );
if ( answerOne.toUpperCase() === 'CORTANA' ) {
    correct += 1;
}
//Question 2
var answerTwo = prompt( "What is the Master Chief's numerical designation?" );
if ( parseInt( answerTwo ) === 117 ) {
    correct += 1;
}
//Question 3
var answerThree = prompt( 'What is the numerical designation for the Halo ring in Combat Evolved?' );
if ( parseInt( answerThree ) === 04 || parseInt( answerThree ) === 4 ) {
    correct += 1;
}
//Question 4
var answerFour = prompt( 'What is the name of the woman who started the Spartan II program?' );
if ( answerFour.toUpperCase() === 'DR. HALSEY' || answerFour.toUpperCase() === 'HALSEY' || answerFour.toUpperCase() === 'CATHERINE HALSEY' || answerFour.toUpperCase() === 'CATHERINE ELIZABETH HALSEY' ) {
    correct += 1;
}
//Question 5
var answerFive = prompt( 'What is the name of the popular vehicle with a turret named after an animal?' );
if ( answerFive.toUpperCase() === 'WARTHOG' ) {
    correct += 1;
}
//Alert to let them know the quiz is over.
alert( "Let's see how you did!" );
//Results
document.write( '<p> You answered ' + correct + ' out of 5 correctly.</p>' );
//Reward
if ( correct === 5 ) {
    document.write( '<p>You get the <strong>GOLD</strong> crown!</p>' );
} else if (correct >= 3) {
    document.write( '<p>You get the <strong>SILVER</strong> crown!</p>' );
} else if (correct >= 1) {
    document.write( '<p>You get the <strong>BRONZE</strong> crown!</p>' );
} else {
    document.write( '<p>You did not earn a crown. You answered them all incorrectly. Try again!</p>' );
}



