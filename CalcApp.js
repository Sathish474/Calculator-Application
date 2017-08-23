var mod = angular.module("CalculatorApp", []);
mod.controller("Calculator", Clcltr);

function Clcltr(){
    this.result = 0;
    this.selectedOperation = function(button){
        this.operation = button;
    }

this.computeResult = function(){
   var value1 = parseFloat(this.input1);
    var value2 = parseFloat(this.input2);
    if (this.operation=== '+') {
        this.result = value1+value2;
        
    } else if(this.operation==='-'){
        this.result = value1- value2;
    }else if(this.operation=== '*'){
        this.result = value1 * value2 ;

    }else if(this.operation === '/'){
        this.result = value1/value2;
    }
}


    }
