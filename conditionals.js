/* const raining= false;
const cold = true;
if (raining){
  console.log("Dont forget your umbrella!");
}
if(cold){
  console.log('Make sure you pick out a scarf!');
}
console.log('Now you\'re ready to go outside!');
*/

// code to inform us what kind of clothing is advisble to wear by inputting the temperatuer
const temperature =-15 ;
if (temperature < 0){
  console.log('Make sure you pick out a scarf!');
}
else if (temperature < 15){
  console.log('Short sleeves won\'t cut it!');

}
else{
  console.log('Short sleeves are fine.');

}
console.log('Now you\'re ready to go outside!');

/*The code checks if an individual is eligible to vote by checking
the individual's age and nationality and comparing it with the criteria
*/
const isCitizen = true;
const age =26;
const raining = false;
if (isCitizen && age>18){
  console.log('You are eligible to vote.');
}
//more conditionals examples to check the weather
if(temperature < -40 || temperature >40){
  console.log('Maybe going outside isn\'t such a great idea...');
}
if (!raining){
  console.log('leave your umbrella at home!');
}