const spans = document.querySelectorAll('.available span');
// const lists = document.querySelectorAll('.list li');

console.log(spans, "uuuuuuuuuuuuuuu");

    

spans.forEach(span => {
  span.addEventListener('click', function() {
    spans.forEach(s => s.classList.remove('selected'));
    this.classList.add('selected');
  });
});

// lists.forEach(li => {
//   li.addEventListener('click', function() {
//     lists.forEach(l => l.classList.remove('selected'));
//     this.classList.add('selected');
//   });
// });