function task(obj){
    let result = {};
    result.model = obj.model;

    let wantedEngine = obj.power;
    if(wantedEngine <= 90){
        result.engine = {power: 90, volume: 1800};
    }else if(wantedEngine >= 240){
        result.engine = {power: 240, volume: 3500};
    }else if(wantedEngine === 120){
        result.engine = {power: 120, volume: 2400};
    }else if(wantedEngine > 90 && wantedEngine < 120){
        let sum1 = (90 - wantedEngine) * -1;
        let sum2 = 120 - wantedEngine;
        if(sum1 <= sum2){
            result.engine = {power: 90, volume: 1800};
        }else if(sum1 > sum2){
            result.engine = {power: 120, volume: 2400};
        }
    }else if(wantedEngine > 120 && wantedEngine < 240){
        let sum1 = (120 - wantedEngine) * -1;
        let sum2 = 240 - wantedEngine;
        if(sum1 <= sum2){
            result.engine = {power: 120, volume: 2400};
        }else if(sum1 > sum2){
            result.engine = {power: 240, volume: 3500};
        }
    }

    result.carriage = {type: obj.carriage, color: obj.color};

    let wheel = Number(obj.wheelsize);
    if(wheel % 2 === 0){
        wheel -= 1;
    }
    result.wheelsize = [wheel, wheel, wheel, wheel];

    return result;
}
