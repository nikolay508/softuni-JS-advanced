function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';

    let textArea = document.querySelector('#messages');
    document.querySelector('#submit').addEventListener('click', onSubmit);
    document.querySelector('#refresh').addEventListener('click', onRefresh);

    async function onSubmit(){
        const author = document.querySelector("input[name='author']");
        const content = document.querySelector("input[name='content']");
        const objInfo = {author: author.value, content: content.value};
        
        if(!author || !content){return alert('Incorrect input!')}
        const response = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(objInfo)
        })
        if(!response.ok){console.error('Error: ', response.status); return}
        author.value = ''; content.value = '';
    }

    async function onRefresh(){
        let info = '';

        const response = await fetch(url);
        if(!response.ok){console.error('Error: ', response.status); return};
        const result = await response.json();
        
        Object.values(result).forEach(x => info += `${x.author}: ${x.content}\n`);
        textArea.textContent = info;
    }
}
attachEvents();
