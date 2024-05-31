function task(arr){
    let final = [];
    for(const str of arr){
        let [product, price] = str.split(' : ');
        price = Number(price);
        final.push({product, price});
    }
    let sorted = final.sort((a, b) => (a.product).localeCompare(b.product));
    
    let currentLetter = sorted[0].product[0];
    console.log(currentLetter);
    for(let i = 0; i < sorted.length; i++){
        let firstLetter = sorted[i].product[0];

        if(firstLetter === currentLetter){
            console.log(`  ${sorted[i].product}: ${sorted[i].price}`);
        }else{
            currentLetter = firstLetter;
            console.log(currentLetter);
            console.log(`  ${sorted[i].product}: ${sorted[i].price}`);
        }
    }
}