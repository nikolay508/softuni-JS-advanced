function task(obj){
    let result = {model: obj.model, engine: undefined, carriage: undefined, wheels: undefined};

    let wantedEngine = obj.power;
    if(wantedEngine <= 90){
        result.engine = {power: 90, volume: 1800};
    }else if(wantedEngine <= 120){
        result.engine = {power: 120, volume: 2400};
    }else{
        result.engine = {power: 200, volume: 3500};
    }

    result.carriage = {type: obj.carriage, color: obj.color};

    let wheel = Number(obj.wheelsize);
    if(wheel % 2 === 0){
        wheel -= 1;
    }
    result.wheels = new Array(4).fill(wheel);

    return result;
}
