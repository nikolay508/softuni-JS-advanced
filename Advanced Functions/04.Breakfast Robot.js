function solution(){
    let sklad = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    let recipes = { apple: ['1 carbohydrate', '2 flavour'], lemonade: ['10 carbohydrate', '20 flavour'], burger: ['5 carbohydrate', '7 fat', '3 flavour'], eggs: ['5 protein', '1 fat', '1 flavour'], turkey: ['10 protein', '10 carbohydrate', '10 fat', '10 flavour'] };

    return (str) => {
        let wholeCommand = str.split(' ')
        let activity = wholeCommand[0];

        if(activity === 'restock'){
            sklad[wholeCommand[1]] += Number(wholeCommand[2]);
            return 'Success';

        }else if(activity === 'prepare'){
            let needs = recipes[wholeCommand[1]];
            let mealSize = Number(wholeCommand[2])
            let isProblem = false;

            for(each of needs){
                let [size, skladProduct] = each.split(' '); 
                size = Number(size) * mealSize;
                if(size > sklad[skladProduct]){
                    isProblem = true
                    return `Error: not enough ${skladProduct} in stock`;
                }
            }

            if(isProblem !== true){
                for(each of needs){
                    let [size, skladProduct] = each.split(' '); 
                    size = Number(size) * mealSize;
                    sklad[skladProduct] -= size;
                }
                return 'Success';
            }

        }else if(activity === 'report'){
            return `protein=${sklad.protein} carbohydrate=${sklad.carbohydrate} fat=${sklad.fat} flavour=${sklad.flavour}`;
        }
    }
}
