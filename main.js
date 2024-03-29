// Modal class
function Modal(el) {
  this.el = el;
  var closeElements = this.el.getElementsByClassName('close');
  for (var i = 0; i < closeElements.length; i++) {
    closeElements[i].addEventListener('click', this.close.bind(this));
  }
}

Modal.prototype.open = function() {
  this.el.style.display = 'block';
};

Modal.prototype.close = function() {
  this.el.style.display = 'none';
};

// Use Modal
var demoModal = new Modal(document.getElementById('demoModal'));

document.getElementById('openButton').addEventListener('click', function() {
  demoModal.open();
});

var modalForm = document.querySelector('#demoModal form');
modalForm.addEventListener('submit', function(event) {
  event.preventDefault();
  result.textContent = modalForm.wants.value;
  demoModal.close();
});