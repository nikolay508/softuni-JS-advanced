function task(obj){
    if(obj.dizziness === true){
        let weightkg = Number(obj.weight);
        let experienceYears = Number(obj.experience);

        let sum = 0.1 * weightkg * experienceYears;
        obj.levelOfHydrated = sum;
        obj.dizziness = false;
    }
    return obj;
}