function getFibonator(){
    let arrNums = [0, 1];
    let count = 0;
    
    return () => {
        count++;
        if(count === 1){
            return 1;
        }else{
            let num = (arrNums[count - 1] + arrNums[count - 2]);
            arrNums.push(num);
            return num;
        }
    }
}
