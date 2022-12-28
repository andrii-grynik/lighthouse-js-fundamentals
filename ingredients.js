const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


console.log("Ingredients list:");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("Ingredients list:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients.reverse(i));
  i++;
  break
}
