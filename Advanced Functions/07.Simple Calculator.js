function calculator() {
    let obj = {};
    return {
        init: (a, b, c) => {
            obj.resultArea = document.querySelector(c);
            obj.selector1 = document.querySelector(a); obj.selector2 = document.querySelector(b);
        },
        add: () => {
            let num1 = Number(obj.selector1.value);
            let num2 = Number(obj.selector2.value);
            obj.resultArea.value = num1 + num2;
        },
        subtract: () => {
            let num1 = Number(obj.selector1.value);
            let num2 = Number(obj.selector2.value);
            obj.resultArea.value = num1 - num2;
        }
    }
}
