function addItem() {
    let textInput = document.querySelector('#newItemText');
    let valueInput = document.querySelector('#newItemValue');
    let menu = document.querySelector('#menu');

    let optionEl = document.createElement('option');
    optionEl.textContent = textInput.value; optionEl.value = valueInput.value;
    menu.append(optionEl);
    textInput.value = ''; valueInput.value = '';
}
