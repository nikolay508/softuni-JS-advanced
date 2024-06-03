function search() {
   const cities = document.getElementsByTagName('li');
   const search = document.getElementById('searchText').value;
   let matchArea = document.getElementById('result');
   let count = 0;
   
   for(each of cities){
      let city = each.textContent;

      if(city.includes(search)){
         each.innerHTML = '<bold><u>' + each.innerHTML + '</u></bold>';
         count++;
      }
   }

   matchArea.textContent = `${count} matches found`;
}
