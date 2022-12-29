const urlEncode = function(text) {
  const regex = /\s+/g;
  return text.trim().replace(regex, '%20');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
