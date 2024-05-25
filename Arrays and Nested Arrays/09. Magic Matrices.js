function task(arrs){
    let isMagical = true
    let criteria = arrs[0][0] + arrs[0][1] + arrs[0][2]

    for(let i = 0; i < arrs.length; i++){
        let sum = 0
        for(let j = 0; j < arrs[0].length; j++){
            sum += arrs[i][j]
        }
        if(sum !== criteria){
            isMagical = false
            break
        }
    }

    for(let i = 0; i < arrs.length; i++){
        let sum = 0
        for(let j = 0; j < arrs[0].length; j++){
            sum += arrs[j][i]
        }
        if(sum !== criteria){
            isMagical = false
            break
        }
    }

    if(isMagical){
        console.log('true')
    }else{
        console.log('false')
    }
}