function count(e) {
  const element = (e.type === 'input') ? e.target : e;
  const container = element.closest('.textarea');

  container.querySelector('.textarea__total-symbols')
    .textContent = element.getAttribute('maxlength');

  container.querySelector('.textarea__count-symbols')
    .textContent = element.value.length;
}

export function handleTextareaSymbolCounter() {
  document.querySelectorAll('.textarea').forEach((textarea) => {    
    if(!textarea.querySelector('.textarea__counter')) return;
    
    const areaInput = textarea.querySelector('.textarea__field');
    areaInput.addEventListener('input', (evt) => count(evt));
    count(areaInput);
  })
}