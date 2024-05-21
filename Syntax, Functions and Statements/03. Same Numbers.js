function task(num){
    let isValid = true
    let sum = 0
    let number = String(num)

    for(let i = 0; i < number.length; i++){
        let digit = Number(number[i])
        let nextDigit = Number(number[i+1])
        sum += digit
        if(digit !== nextDigit && i !== number.length-1){
            isValid = false
        }
    }
    if(isValid){
        console.log('true')
    }else{
        console.log('false')
    }
    console.log(sum)
}
