function task(arr){
    let final = [];
    let number = 1;
    
    for(command of arr){
        if(command === 'add'){
            final.push(number);
        }else if(command === 'remove'){
            final.pop();
        }
        number++;
    }

    if(final.length > 0){
        console.log(final.join('\n'));
    }else{
        console.log('Empty');
    }
}
