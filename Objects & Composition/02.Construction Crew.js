function task(obj){
    if(obj.dizziness === true){
        let sum = 0.1 * Number(obj.weight) * Number(obj.experience);
        obj.levelOfHydrated += sum;
        obj.dizziness = false;
    }
    return obj;
}
