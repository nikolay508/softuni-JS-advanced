function task(arr){
    let final = [];

    for(const str of arr){
        let [product, price] = str.split(' : ');
        price = Number(price);
        final.push({product, price});
    }
    let sorted = final.sort((a, b) => (a.product).localeCompare(b.product));

    let currentLetter = '';
    for(let i = 0; i < final.length; i++){
        let letter = final[i].product[0];
        if(currentLetter === letter){
            console.log(`  ${final[i].product}: ${final[i].price}`);
        }else{
            currentLetter = letter;
            console.log(currentLetter);
            console.log(`  ${final[i].product}: ${final[i].price}`);
        }
    }
}
