function analyzetext(text) {
 let sentence = prompt("Enter a sentence ending with a point:");
 let lengthCount = 0;
let wordCount = 0;
let vowelCount = 0;
let vowels = "aeiouAEIOU";
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  lengthCount++;
  if (vowels.includes(char)) {
    vowelCount++;
  }
  if (char === ' ' || char === '.') {
    if (i > 0 && sentence[i - 1] !== ' ') {
      wordCount++;
    }
  }
  if (char === '.') {
    break;
  }
}
console.log("Length of the sentence: " + lengthCount);
console.log("Number of words in the sentence: " + wordCount);
console.log("Number of vowels in the sentence: " + vowelCount);

alert("Length of the sentence: " + lengthCount + 
      "\nNumber of words in the sentence: " + wordCount + 
      "\nNumber of vowels in the sentence: " + vowelCount);
}