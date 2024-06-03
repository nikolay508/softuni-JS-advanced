function subtract() {
    let num1 = Number(document.getElementById('firstNumber').value);
    let num2 = Number(document.getElementById('secondNumber').value);
    let sum = num1 - num2;

    let resultArea = document.getElementById('result');
    resultArea.textContent = sum;
}
