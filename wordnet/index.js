const natural = require("natural");
const wordnet = new natural.WordNet();
words = process.argv.slice(2);

console.log("Número de palabras", words.length);

words.forEach(word => {
  console.log(word.toUpperCase());
  wordnet.lookup(word, function(details) {
    details.forEach(function(detail) {
      console.log("------------------------------");
      console.log("Definición: " + detail.def);
      console.log("Sinonimos: " + detail.synonyms);
      console.log("POS: " + detail.pos);

      // Muestra ejemplos, si los hay
      detail.exp.forEach(function(example) {
        console.log("EJEMPLO: " + example);
      });
      console.log("------------------------------");
    });
  });
});
