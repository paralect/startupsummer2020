window.onload = function () {
  const textarea = document.querySelector('.contact-form_input textarea');
  const symbolNumber = document.querySelector('.textarea_max-length');

  textarea.addEventListener('keydown', () => {
    symbolNumber.innerHTML = `${textarea.value.length} / 250`;
  });
};
