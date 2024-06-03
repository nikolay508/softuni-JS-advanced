function solve() {
  const text = document.getElementById('text').value;
  const type = document.getElementById('naming-convention').value;
  const resultArea = document.getElementById('result');
  let finalMessage = '';

  if(type === 'Camel Case'){

    let split = text.split(' ');
    for(let i = 0; i < split.length; i++){
      let word = split[i];
      if(i === 0){
        word = word.toLowerCase();
      }else{
        word = word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
      }
      finalMessage += word;
    }

  }else if(type === 'Pascal Case'){

    let split = text.split(' ');
    for(let i = 0; i < split.length; i++){
      let word = split[i];
      word = word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
      finalMessage += word;
    }

  }else{
    finalMessage += 'Error!';
  }

  resultArea.textContent = finalMessage;
}
