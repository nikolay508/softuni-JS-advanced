function task(arr){
    let finalArr = []

    for(const str of arr){
        let [name, level, items] = str.split(' / ');
        items = items ? items.split(', ') : [];
        level = Number(level);
        finalArr.push({name, level, items});
    }
    console.log(JSON.stringify(finalArr));
}