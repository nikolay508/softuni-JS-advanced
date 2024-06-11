function create(words) {
   let resultField = document.querySelector('#content');

   for(const each of words){
      let div = document.createElement('div');
      let paragraph = document.createElement('p'); paragraph.textContent = each; paragraph.style.display = 'none'; 
      div.append(paragraph);

      div.addEventListener('click', function(){
         paragraph.style.display = 'inline';
         paragraph.style.display = each;
      })

      resultField.append(div);
   }
}
