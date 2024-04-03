const spans = document.querySelectorAll('.available span');
console.log(spans, "uuuuuuuuuuuuuuu");

    

spans.forEach(span => {
  span.addEventListener('click', function() {
    spans.forEach(s => s.classList.remove('selected'));
    this.classList.add('selected');
  });
});
