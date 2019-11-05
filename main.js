var openButton = document.getElementById('openButton');
var result = document.getElementById('result');
var demoModal = document.getElementById('demoModal');
var closeButton = document.getElementById('closeButton');
var overlay = document.getElementById('overlay');

openButton.addEventListener('click', function() {
  demoModal.style.display = 'block';
});

overlay.addEventListener('click', function() {
  demoModal.style.display = 'none';
});

var modalForm = demoModal.querySelector('form');

for (var i=0; i < 30; i++) {
  var option = document.createElement('option');
  option.value = 2019 - i;
  option.textContent = option.value;
  modalForm.year.appendChild(option);
}

for (var i=0; i < 12; i++) {
  var option = document.createElement('option');
  option.value = i + 1;
  option.textContent = option.value;
  modalForm.month.appendChild(option);
}

for (var i=0; i < 31; i++) {
  var option = document.createElement('option');
  option.value = i + 1;
  option.textContent = option.value;
  modalForm.day.appendChild(option);
}

modalForm.addEventListener('submit', function(event) {
  event.preventDefault();
  result.textContent = modalForm.year.value + '/' + modalForm.month.value + '/' + modalForm.day.value;
  demoModal.style.display = 'none';
});