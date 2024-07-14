function solve() {
    let schedulePage = document.querySelector('.container-text form');

    let [x, firstName, y, lastName, z, fromDate, w, toDate, btnNext] = schedulePage.children;
    let infoPage = document.querySelector('.info-list');
    let confirmPage = document.querySelector('.confirm-list');

    let article = document.createElement('article');
    let li = document.createElement('li'); li.setAttribute('class', 'vacation-content');
    let btnEdit = document.createElement('button'); btnEdit.textContent = 'Edit'; btnEdit.setAttribute('class', 'edit-btn');
    let btnContinue = document.createElement('button'); btnContinue.textContent = 'Continue'; btnContinue.setAttribute('class', 'continue-btn');
    let btnConfirm = document.createElement('button'); btnConfirm.textContent = 'Confirm'; btnConfirm.setAttribute('class', 'confirm-btn');
    let btnCancel = document.createElement('button'); btnCancel.textContent = 'Cancel'; btnCancel.setAttribute('class', 'cancel-btn');

    let h1ElementFinal = document.querySelector('#status');

    btnNext.addEventListener('click', function(e){
        e.preventDefault();

        if(firstName.value === '' || lastName.value === '' || fromDate.value === '' || lastName.value === '' || new Date(fromDate.value) >= new Date(toDate.value)){ return };

        let h3 = document.createElement('h3'); h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
        let p1 = document.createElement('p'); p1.textContent = `From date: ${fromDate.value}`;
        let p2 = document.createElement('p'); p2.textContent = `To date: ${toDate.value}`;

        article.append(h3, p1, p2); li.append(article, btnEdit, btnContinue);
        firstName.value = ''; lastName.value = ''; fromDate.value = ''; toDate.value = ''; btnNext.disabled = true;
        infoPage.append(li);
    })

    btnEdit.addEventListener('click', function(e){
        e.preventDefault();

        btnNext.disabled = false;
        let [x, name1, name2] = article.children[0].textContent.split(' ');
        firstName.value = name1; lastName.value = name2;
        fromDate.value = article.children[1].textContent.substring(11);
        toDate.value = article.children[2].textContent.substring(9);
        article.innerHTML = '';
        li.remove();
    })

    btnContinue.addEventListener('click', function(e){
        e.preventDefault();

        li.removeChild(btnEdit); li.removeChild(btnContinue); 
        li.append(btnConfirm, btnCancel); confirmPage.append(li);
    })

    btnConfirm.addEventListener('click', function(e){
        e.preventDefault();

        btnNext.disabled = false;
        h1ElementFinal.setAttribute('class', 'vacation-confirmed');
        h1ElementFinal.textContent = 'Vacation Requested';
        li.remove();
    })

    btnCancel.addEventListener('click', function(e){
        e.preventDefault();

        btnNext.disabled = false;
        h1ElementFinal.setAttribute('class', 'vacation-cancelled');
        h1ElementFinal.textContent = 'Cancelled Vacation';
        li.remove();
    })

    h1ElementFinal.addEventListener('click', function(e){
        e.preventDefault();

        window.location.reload()
    })
}
