const txtElement = ['Student', 'Programmer', 'Gamer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function typingefect() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector('.typingefect').textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(typingefect, 500);
})();
