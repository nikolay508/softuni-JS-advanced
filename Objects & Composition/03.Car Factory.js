function task(obj){
    let final = { model: obj.model, engine: {}, carriage: {}, wheels: [] };
    
    if(obj.power <= 90){
        final.engine = { power: 90, volume: 1800 };
    }else if(obj.power <= 120){
        final.engine = { power: 120, volume: 2400 };
    }else{
        final.engine = { power: 200, volume: 3500 };
    };

    final.carriage = { type: obj.carriage, color: obj.color };

    if(obj.wheelsize % 2 === 0){
        obj.wheelsize = obj.wheelsize - 1;
    };
    final.wheels = new Array(4).fill(obj.wheelsize);

    return final;
}
