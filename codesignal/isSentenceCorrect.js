// A sentence is considered correct if:

// it starts with a capital letter;
// it ends with a full stop, question mark or exclamation point ('.', '?' or '!');
// full stops, question marks and exclamation points don't appear anywhere else in the sentence.
// Given a sentence, return true if it is correct and false otherwise.

// Example

// For sentence = "This is an example of *correct* sentence.",
// the output should be
// isSentenceCorrect(sentence) = true;

// For sentence = "!this sentence is TOTALLY incorrecT",
// the output should be
// isSentenceCorrect(sentence) = false.

function isSentenceCorrect(sentence) {
  var re = /^[A-Z][^.!?]*[.!?]$/;
  return re.test(sentence);
}
