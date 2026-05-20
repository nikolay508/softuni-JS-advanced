function constructionCrew(worker) {
    if (worker.dizziness) {
        const waterNeeded = worker.weight * worker.experience * 0.1;
        
        worker.levelOfHydrated += waterNeeded;
        worker.dizziness = false;
    }
    
    return worker;
}
