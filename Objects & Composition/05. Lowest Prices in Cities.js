function task(arr){
    let final = [];

    for(const str of arr){
        let [name, product, price] = str.split(' | ');
        price = Number(price);

        let toFind = final.find(n => n.product === product);
        if(toFind){
            if(toFind.price > price){
                toFind.name = name;
                toFind.price = price;
            }
        }else{
            final.push({name, product, price});
        }
    }

    for(const each of final){
        console.log(`${each.product} -> ${each.price} (${each.name})`);
    }
}