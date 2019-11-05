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

var yearForm = demoModal.querySelector('form').year;
for (var i=0; i < 30; i++) {
  var option = document.createElement('option');
  option.value = 2019 - i;
  option.textContent = option.value;
  yearForm.appendChild(option);
}

var monthForm = demoModal.querySelector('form').month;
for (var i=0; i < 12; i++) {
  var option = document.createElement('option');
  option.value = i + 1;
  option.textContent = option.value;
  monthForm.appendChild(option);
}

var dayForm = demoModal.querySelector('form').day;
for (var i=0; i < 31; i++) {
  var option = document.createElement('option');
  option.value = i + 1;
  option.textContent = option.value;
  dayForm.appendChild(option);
}