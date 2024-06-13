function task(arr){
    let final = [];
    let arr2 = arr.slice();

    let sortFromSmall = arr.sort((a, b) => {
        return a-b;
    })
    let sortFromBig = arr2.sort((a, b) => {
        return b-a;
    })

    let count1 = 0;
    let count2 = 0;
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            final.push(sortFromSmall[count1]);
            count1++;
        }else{
            final.push(sortFromBig[count2]);
            count2++;
        }
    }
    return final;
}
