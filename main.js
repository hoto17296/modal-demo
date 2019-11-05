var openButton = document.getElementById('openButton');
var result = document.getElementById('result');
var demoModal = document.getElementById('demoModal');
var closeButton = document.getElementById('closeButton');
var overlay = document.getElementById('overlay');

openButton.addEventListener('click', function() {
  demoModal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  demoModal.style.display = 'none';
});

overlay.addEventListener('click', function() {
  demoModal.style.display = 'none';
});