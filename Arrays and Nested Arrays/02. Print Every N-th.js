function task(arr, N){
    let final = [arr[0]]
    let count = 0
    for(let i = 1; i < arr.length; i++){
        count++
        if(count === N){
            count = 0
            final.push(arr[i])
        }
    }
    return final
}