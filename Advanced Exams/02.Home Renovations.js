class HomeRenovation{
    constructor(budget){
        this.budget = budget; this.tasks = []; this.completedTasks = [];
    }

    addTask(description, cost, priority){
        if(cost > this.budget){
            return  `Not enough budget to add '${description}' task.`;
        }
        this.tasks.push({description, cost, priority});
        this.budget -= cost;
        return `The task '${description}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(description){
        this.isFound = false;

        for (const each of this.tasks) {
            if(each.description === description){
                this.isFound = true;
                this.tasks.splice(this.tasks.indexOf(each), 1);
                this.completedTasks.push(each);
                return `The task '${description}' has been successfully completed.`;
            }
        }

        if(this.isFound === false){
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }
    }

    getPriorityTasksCount (minimalPriority){
        if(minimalPriority <= 0){
            return `The priority cannot be zero or negative.`;
        }

        this.tasksCount = 0;
        this.isTherePriorities = false;
        for (const each of this.tasks) {
            if(each.priority >= minimalPriority){
                this.tasksCount++;
                this.isTherePriorities = true;
            }
        }

        if(this.isTherePriorities === false){
            return `No tasks found with priority ${minimalPriority} or higher.`
        }else{
            return `You have ${this.tasksCount} tasks to prioritize.`
        }
    }

    renovationSummary(){
        if(this.completedTasks.length < 1){
            throw new Error("No tasks have been completed yet!");
        }
        this.allFromTasks = '';
        for (const each of this.tasks) {
            this.allFromTasks += `${each.description} - Cost: ${each.cost}, Priority: ${each.priority}`
        }

        return `Budget left $${this.budget}.\nYou have completed ${this.completedTasks.length} tasks.\nPending tasks in the renovation plan:\n${this.allFromTasks}`
    }
}
