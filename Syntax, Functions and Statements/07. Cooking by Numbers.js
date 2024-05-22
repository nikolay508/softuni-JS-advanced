function task(strNum, command1, command2, command3, command4, command5){
    let arr = [command1, command2, command3, command4, command5]
    let number = Number(strNum)

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'chop'){
            number /= 2
            console.log(number)
        }else if(arr[i] === 'dice'){
            number = Math.sqrt(number)
            console.log(number)
        }else if(arr[i] === 'spice'){
            number += 1
            console.log(number)
        }else if(arr[i] === 'bake'){
            number *= 3
            console.log(number)
        }else if(arr[i] === 'fillet'){
            number -= (0.2 * number)
            console.log(number)
        }
    }
}