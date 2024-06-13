function task(arrs){
    let isMagical = true;
    let finalSum = 0;

    for(let i = 0; i < arrs.length; i++){
        let sum = 0;
        let currentRow = arrs[i];
        for(let j = 0; j < arrs.length; j++){
            sum += currentRow[j];
        }
        if(i === 0){
            finalSum = sum;
        }else if(sum !== finalSum){
            isMagical = false;
        }
    }

    console.log(isMagical);
}
