function solve() {
    const departbtn = document.querySelector('#depart');
    const arrivebtn = document.querySelector('#arrive');
    const textField = document.querySelector('.info');

    let currentId = ''; let nextId = 'depot';

    async function depart() {
        currentId = nextId;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${nextId}`;

        try{
            const res = await fetch(url);
            if(!res.ok){const err = await res.json(); throw err};
            const data = await res.json();
            textField.textContent = `Next stop ${data.name}`;

            nextId = data.next;
            departbtn.disabled = true; arrivebtn.disabled = false;
        }catch(err){
            textField.textContent = `Error`;
            departbtn.disabled = true; arrivebtn.disabled = true;
        }
    }

    async function arrive() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${currentId}`;

        try{
            const res = await fetch(url);
            if(!res.ok){const err = await res.json(); throw err};
            const data = await res.json();
            textField.textContent = `Arriving at ${data.name}`;

            nextId = data.next;
            departbtn.disabled = false; arrivebtn.disabled = true;
        }catch(err){
            textField.textContent = `Error`;
            departbtn.disabled = true; arrivebtn.disabled = true;
        }
    }

    return {
        depart,
        arrive
    }
}
let result = solve();
