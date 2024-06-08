function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const input = document.querySelector('#searchField');
   const info = document.querySelector('tbody').children;

   function onClick() {
      for(each of info){
         
         if(each.classList.contains('select') === true){
            each.classList.remove('select');
         }

         let child = each.children;

         for(str of child){
            if(str.textContent.includes(input.value)){
               each.classList.add('select');
            }
         }
      }
      input.value = '';
   }
}
