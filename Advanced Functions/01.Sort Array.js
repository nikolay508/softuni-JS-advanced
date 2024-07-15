function task(arr, criteria){
    let sorted = [];
    
    if(criteria === 'asc'){
        sorted = arr.sort((a,b) => {return a-b});
    }else if(criteria === 'desc'){
        sorted = arr.sort((a,b) => {return b-a});
    }
    
    return sorted;
}
