function task(obj){
    if(obj.dizziness === true){
        let sum = 0.1 * obj.weight * obj.experience;
        obj.levelOfHydrated += sum;
        obj.dizziness = false;
    }
    return obj;
}
