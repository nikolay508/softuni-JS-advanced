function task(arr){
    let sorted = arr.sort((a, b) => {
        return a.localeCompare(b)});
    let count = 0;

    for(let i = 0; i < sorted.length; i++){
        count++;
        console.log(`${count}.${sorted[i]}`);
    }
}
