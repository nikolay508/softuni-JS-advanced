function solve(){
    document.querySelector('#btnSend').addEventListener('click', onClick);

    let inputRef = document.querySelector('textarea');
    let restaurantOutput = document.querySelector('#bestRestaurant p');
    let workersOutput = document.querySelector('#workers p');

    function onClick(){
        let input = JSON.parse(inputRef.value);
        let result = [];

        for(let el of input){
            let [restaurantName, workersData] = el.split(' - ');
            if(!result.hasOwnProperty(restaurantName)){
                result[restaurantName] = {
                    avgSalary: 0,
                    allSalaries: [],
                    allWorkers: []
                }
            }

            let workersDataArr = workersData.split(', ');
            for(let worker of workersDataArr){
                let [workerName, salary] = worker.split(' ');
                salary = Number(salary);
                result[restaurantName].allSalaries.push(salary);
                result[restaurantName].allWorkers.push({workerName, salary});
            }
        }

        for(let restData of Object.values(result)){
            restData.avgSalary = Number((restData.allSalaries.reduce((a,b)=>a+b, 0) / restData.allSalaries.length));
        }

        let sortedResult = Object.entries(result).sort((a,b)=>b[1].avgSalary - a[1].avgSalary);
        let bestRestaurant = sortedResult[0];
        restaurantOutput.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSalary.toFixed(2)} Best Salary: ${(Math.max(...bestRestaurant[1].allSalaries).toFixed(2))}`;
        let bestRestaurantWorkers = bestRestaurant[1].allWorkers.sort((a,b)=>b.salary - a.salary).map(a=> `Name: ${a.workerName} With Salary: ${a.salary}`).join(' ');
        workersOutput.textContent = bestRestaurantWorkers;
    }
}
