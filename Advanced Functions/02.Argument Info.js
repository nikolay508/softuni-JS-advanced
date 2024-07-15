function task(...all){
    let obj = {};
    
    for(each of all){
        let type = typeof(each);
        if(obj.hasOwnProperty(type)){
            obj[type] += 1;
        }else{
            obj[type] = 1;
        }
        console.log(`${type}: ${each}`);
    }
    
    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for(each of sorted){
        if(each[1] > 0){
            console.log(`${each[0]} = ${each[1]}`);
        }
    }
}
