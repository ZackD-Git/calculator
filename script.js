"useStrict";

let displayText = document.getElementById("display_text");
let solution;


function Operate(operation){
    console.log("Operation: " + operation)
    switch(operation[1]){
        case "+":
            console.log("plus");
            return Number(operation[0] + operation[2]).toFixed(3);
        case "-": 
            return Number(operation[0] - operation[2]).toFixed(3);
        case "*":
            return Number(operation[0] * operation[2]).toFixed(3);
        case "/": 
            return Number(operation[0] / operation[2]).toFixed(3);
        default:
            break;
    }
}

function ParseCalculation(calculationString){
    return calculationString.split(" ").map(ConvertNum);

    function ConvertNum(num){
        if(isNaN(parseInt(num))){
            return num;
        }
        else{
            return parseInt(num)
        }
    }
}

//Run Upon '=' Button press
function Solve(calculation){
   let calculationArray = ParseCalculation(calculation);
   console.log(calculationArray);
   let firstOperandIndex;

    while(calculationArray.length > 1){
        firstOperandIndex = Pemdas() - 1;
        let result = Operate(calculationArray.splice(Pemdas() - 1, 3));
        console.log("Result: " + result);
        calculationArray.splice(firstOperandIndex, 0, result);
        console.log(calculationArray);
    }
    
    solution = calculationArray[0];
    //Display Solution in displayText
    return solution;

   function Pemdas(){
    if(calculationArray.findIndex((op) => {return op == "*"}) !== -1)
    {
        return calculationArray.findIndex((op) => {return op == "*"});
    }
    else if(calculationArray.findIndex((op) => {return op == "/"}) !== -1)
    {
        return calculationArray.findIndex((op) => {return op == "/"});
    }
    else if(calculationArray.findIndex((op) => {return op == "+"}) !== -1)
    {
        return calculationArray.findIndex((op) => {return op == "+"});
    }
    else if(calculationArray.findIndex((op) => {return op == "-"}) !== -1)
    {
        return calculationArray.findIndex((op) => {return op == "-"});
    }
   }

}

function TextInput(character){
    //No dots unless the previous character is a num
    //No operator unless the previous character is a num

    //If last character is a number allow anythin
    //else only numbers
    if(!isNaN(parseInt(displayText.innerHTML.slice(-1)))){
        console.log("Last Char: " + parseInt(displayText.innerHTML.slice(-1)));
        displayText.innerHTML += character.innerHTML;
        console.log(character.class);
    }
    else{
        switch(character.id){
            case "add": break;
            case "subtract": break;
            case "multiply": break;
            case "divide": break;
            case "dot": break;
            default: displayText.innerHTML += character.innerHTML;
        }
    }    
}

function Submit(){
    //Check for divide by Zero
    //Do nothing if string doesnt end with number
    
    displayText.innerHTML = Solve(displayText.innerHTML);
}

function ClearText(){
    displayText.innerHTML = "";
}

//module.exports = Solve;