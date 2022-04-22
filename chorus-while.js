const chorus = 'let\'s dance';
let repeat =0;
//This code repeats the phrase 'let's dance' ten times
/*while (repeat <10){
  console.log(chorus);
  repeat++;
}
console.log('Until the sun comes up');
*/
//This code does the same thing, but on the fifth time, it instructs us to change the key
while(repeat<10){
  if(repeat === 5 ){
    console.log('*change key*');
  }
  console.log(chorus);
  repeat++;
}
console.log('Until the sun comes up!');