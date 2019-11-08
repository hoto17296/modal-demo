var openButton = document.getElementById('openButton');
var result = document.getElementById('result');
var demoModal = document.getElementById('demoModal');
var closeButton = document.getElementById('closeButton');
var overlay = document.getElementById('overlay');
var modalForm = demoModal.querySelector('form');

openButton.addEventListener('click', function() {
  demoModal.style.display = 'block';
});

overlay.addEventListener('click', function() {
  demoModal.style.display = 'none';
});

modalForm.addEventListener('submit', function(event) {
  event.preventDefault();
  result.textContent = modalForm.wants.value;
  demoModal.style.display = 'none';
});