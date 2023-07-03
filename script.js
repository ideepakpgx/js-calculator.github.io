function buttonClick(val) {
    document.getElementById("output").value += val;
}
function clearOutput() {
    document.getElementById("output").value = "";
}
function equalClick() {
    var text = document.getElementById("output").value;
    var result = eval(text);
    document.getElementById("output").value = result;
}
function calculatePercentage() {
    var output = document.getElementById("output");
    var currentValue = parseFloat(output.value);
    var percentageValue = currentValue / 100;
    output.value = percentageValue;
}
function deleteNumber() {
    var result = document.getElementById("output");
    var currentNumber = output.value;
    var newNumber = currentNumber.slice(0, -1);
    result.value = newNumber;
}
function doubleZero() {
    var result = document.getElementById("output").value += "00";
}

