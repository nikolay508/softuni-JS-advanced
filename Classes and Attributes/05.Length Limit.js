class Stringer{
    constructor(a, b){
        this.innerString = a; this.innerLength = b;
        if(this.innerString.length < this.innerLength){
            for(let i = 0; i < (this.innerLength - this.innerString.length); i++){
                this.innerString += ' ';
            }
        }
        this.changableStr = this.innerString;
    }
    
    toString(){
        return this.changableStr;
    }

    decrease(lengthCut){
        if(lengthCut >= this.innerLength){
            this.innerLength = 0; this.changableStr = '...';
            return;
        }
        this.changableStr = this.changableStr.substring(0, (this.changableStr.length - lengthCut)) + '...';
        this.innerLength -= lengthCut;
    }

    increase(lengthPlus){
        if(this.innerLength === 0){
            this.changableStr = this.innerString.substring(0, lengthPlus);
            this.innerLength = this.changableStr.length;
            return;
        }
        this.changableStr = this.changableStr.substring(0, this.changableStr.indexOf('.'));
        this.changableStr += (this.innerString.substring(this.changableStr.length, this.changableStr.length+lengthPlus));
        this.innerLength = this.changableStr.length;
    }
}
