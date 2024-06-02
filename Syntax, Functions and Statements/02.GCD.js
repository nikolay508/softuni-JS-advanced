function task(num1, num2){
    for(let i = 10; i > 0; i--){
        if(num1 % i === 0 && num2 % i === 0){
            console.log(i);
            break;
        }
    }
}
