const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i =0;
while(i < ingredients.length){
  console.log(ingredients[i]);
i++;
}
// Write a for loop that prints out the contents of ingredients:
for(let t=0; t < ingredients.length; t++){
  console.log(ingredients[t]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let p = ingredients.length - 1; p >= 0; p--){
      console.log(ingredients[p]);

}

