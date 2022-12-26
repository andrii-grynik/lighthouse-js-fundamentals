var age = ""; //authorize a variable

function whichSchool(age) { // creating a function to automate different variables
  return (age < 13) ? "Elementary School"
       : (age >= 13 && age <= 18) ? "Secondary School"
       : (age > 18) ? "LightHouse Labs"
       : "None"
}


console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
