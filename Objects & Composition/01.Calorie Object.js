function calorieObject(arr) {
    const result = {};
    
    for (let i = 0; i < arr.length; i += 2) {
        const name = arr[i];
        const calories = Number(arr[i + 1]);
        result[name] = calories;
    }
    
    console.log(result);
}
