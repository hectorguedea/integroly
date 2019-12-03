const natural = require("natural");
const wordnet = new natural.WordNet();
words = process.argv.slice(2);

console.log("Número de palabras", words.length);

words.forEach(word => {
  console.log(word.toUpperCase());
  wordnet.lookup(word, function(details) {
    details.forEach(function(detail) {
      console.log("------------------------------");
      console.log("Definition: " + detail.def);
      console.log("Synonyms: " + detail.synonyms);
      console.log("POS: " + detail.pos);

      // Display examples, if available
      detail.exp.forEach(function(example) {
        console.log("EXAMPLE: " + example);
      });
      console.log("------------------------------");
    });
  });
});
