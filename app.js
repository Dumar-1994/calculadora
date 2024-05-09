//calculadora
function calculadora(num1,num2,up){
    switch(up){
        case "+":
            return sumar(num1,num2);
        case "-":
            return resta(num1,num2);
        case "*":
            return multi(num1,num2);
    }
}



function mutltiplicar() {
    let num1 = 5;
    let num2 = 10;
    mult = num1*num2;
    return (mult);
};