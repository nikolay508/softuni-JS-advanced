function task(arr){
    let result = [];

    for(const str of arr){
        let [name, level, items] = str.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        
        if(name && level && items){
            result.push({name, level, items});
        }
    };

    console.log(JSON.stringify(result));
}
