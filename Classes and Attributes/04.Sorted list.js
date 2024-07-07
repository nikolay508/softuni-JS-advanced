class List{
    arr = [];

    constructor(){
        Object.defineProperty(this, 'size', {
            get: () => this.arr.length,
            enumerable: true,
            configurable: true
          });
    }

    add(num){
        this.arr.push(num)
    }

    remove(index){
        this.arr.splice(index, 1);
    }

    get(index){
        this.sorted = this.arr.sort((a, b) => a - b);
        return this.sorted[index];
    }

    arraySize(){
        return this.arr.length
    }

}
