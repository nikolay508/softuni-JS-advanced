function task(arr){
    let final = []
    let biggest = -999999999999999
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > biggest){
            biggest = arr[i]
            final.push(arr[i])
        }
    }
    return final
}