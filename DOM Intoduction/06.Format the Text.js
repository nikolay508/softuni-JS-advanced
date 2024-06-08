function solve() {
  let button = document.querySelector('#formatItBtn');
  let input = document.querySelector('#input').value;
  let resultField = document.querySelector('#output');
  
  button.addEventListener('click', change);

  function change(){
    let regex = /((?:[^.]+\.){1,3})/g;
    let result = input.match(regex).map(x => x.trim());
    
    for(each of result){
      let paragraph = document.createElement('p'); paragraph.textContent = each;
      resultField.appendChild(paragraph);
    }
  }
}
