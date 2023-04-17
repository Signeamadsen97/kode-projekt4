const inputSkema = document.getElementById('input');

inputSkema.addEventListener('input', () => {
  inputSkema.style.height = "0";
  inputSkema.style.height = (input.scrollHeight) + "px"; 
  inputSkema.style.overflow = "hidden";
});

if (inputSkema) {
inputSkema.addEventListener('focus', () => {
  inputSkema.dataset.placeholder = input.placeholder
  inputSkema.placeholder = '';

});
inputSkema.addEventListener('blur', (e) => {
  inputSkema.placeholder = inputSkema.dataset.placeholder;
});
}