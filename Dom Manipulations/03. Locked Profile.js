function lockedProfile() {
    let buttons = document.querySelectorAll('button');

    for(const button of buttons){
        button.addEventListener('click', function(){
            let user = button.parentElement;
            let inputs = user.querySelectorAll('input');
            if(inputs[1].checked){
                if(button.textContent === 'Hide it'){
                    inputs[4].parentElement.style.display = 'none';
                    button.textContent = 'Show more';
                }else{
                    inputs[4].parentElement.style.display = 'block';
                    button.textContent = 'Hide it';
                }
            }
        })
    }
}
