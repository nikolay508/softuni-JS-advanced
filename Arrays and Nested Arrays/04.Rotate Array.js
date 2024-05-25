function task(arr, num){
    for(let i = 0; i < num; i++){
        arr.unshift(arr[arr.length-1])
        arr.pop()
    }
    console.log(arr.join(' '))
}
