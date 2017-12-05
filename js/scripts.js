$(document).ready(function() {
  $("form#puzzle").submit(function(event) {
    event.preventDefault();
    var wordsToScramble = $("input#userSentence").val()
console.log(wordsToScramble);

  });
});
