"useStrict";

let displayText;
let solution;

function Add(x,y){
    return RoundToHundreth(x + y);
}
function Subtract(x,y){
    return RoundToHundreth(x - y);
}
function Multiply(x,y){
    return RoundToHundreth(x * y);
}
function Divide(x,y){
    return RoundToHundreth(x / y)
}

function RoundToHundreth(float){
   return Math.round((float + Number.EPSILON) * 100) / 100;
}

function Operate(...operation){
    switch(operation[1]){
        case "+":
            return Add(operation[0], operation[2]);
        case "-": 
            return Subtract(operation[0], operation[2]);
        case "*":
            return Multiply(operation[0], operation[2])
        case "/": 
            return Divide(operation[0], operation[2]);
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
   let firstOperandIndex;

    while(calculationArray.length > 1){
        firstOperandIndex = Pemdas() - 1;
        calucationArray.splice(firstOperandIndex, 0, Operate(calculationArray.splice(Pemdas - 1, 3)));
    }
    
    solution = calculationArray[0];
    //Display Solution in displayText

   function Pemdas(){
    if(calculationArray.findIndex("*") !== -1)
    {
        return calculationArray.findIndex("*");
    }
    if(calculationArray.findIndex("/") !== -1)
    {
        return calculationArray.findIndex("/");
    }
    if(calculationArray.findIndex("+") !== -1)
    {
        return calculationArray.findIndex("+");
    }
    if(calculationArray.findIndex("-") !== -1)
    {
        return calculationArray.findIndex("-");
    }
   }

}
module.exports = Solve;