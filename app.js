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