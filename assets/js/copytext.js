function copyToClipboard() {
  var copyText = document.querySelector('.footer-copy-box[data-text]');
  var textToCopy = copyText.getAttribute('data-text');

  var input = document.createElement('input');
  input.value = textToCopy;
  document.body.appendChild(input);
  

  input.select();
  document.execCommand('copy');
 
  document.body.removeChild(input);
  

  copyText.classList.add('animate__animated', 'animate__bounce');
  
 
  var originalText = copyText.textContent;
  copyText.textContent = 'Skopiowano!';
  copyText.classList.add('copy-success');
  
  copyText.addEventListener('animationend', function() {
    copyText.classList.remove('animate__animated', 'animate__bounce');
    copyText.textContent = originalText;
    copyText.classList.remove('copy-success');
  });
}