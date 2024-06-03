function toggle() {
    let text = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if(button.textContent === 'More'){
        text.style.display = 'block';
        button.textContent = 'Less';
    }else if(button.textContent === 'Less'){
        text.style.display = 'none';
        button.textContent = 'More';
    }
}
