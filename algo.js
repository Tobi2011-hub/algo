function analyzetext(text) {
  let sentence = text.trim();
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
return {
  length: lengthCount,
  words: wordCount,
  vowels: vowelCount
}
}
console.log(analyzetext("Hello, all 25 of my dogs are cute"));