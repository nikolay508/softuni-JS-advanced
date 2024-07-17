const nameField = document.querySelector('#stopName');
const ulField = document.querySelector('#buses');

function getInfo() {
    nameField.value = ''; ulField.innerHTML = '';
    const input = document.querySelector('#stopId');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${input.value}`;

    fetch(url)
        .then((res)=>{if(!res.ok){throw res};return res.json()})
        .then(data => {
            nameField.textContent = data.name;
            const busInfo = Object.entries(data.buses);
            ulField.innerHTML = busInfo.map(x => `<li>Bus ${x[0]} arrives in ${x[1]} minutes</li>`).join('');
        })
        .catch(showError)
        function showError(){
            nameField.textContent = 'Error';
        }
    
    input.value = '';
}
