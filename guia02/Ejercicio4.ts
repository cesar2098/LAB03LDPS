// Crear una clase Calculadora, con las propiedades numero1, numero1, Le añadiremos 
// un constructor al que le pasaremos los valores anteriores cuando instanciemos el
// objeto. Y también debe de tener un método operaciones básicas (+ , -, * , /), 
// Este método debe imprimir en pantalla todas 
// las operaciones realizadas.

class Calculadora{
    private number1:number;
    private number2:number;

    constructor (numero1:number, numero2:number){
        this.number1=numero1;
        this.number2=numero2;
    }

    public operacionesBasicas(numero1:number, numero2:number){
        var suma:number;
        var resta:number;
        var multiplicacion:number;
        var division:number;
        //Operacion suma
        suma=numero1+numero2;

        //Operacion Resta
        resta=numero1-numero2;

        //Operacion Multiplicacion
        multiplicacion=numero1*numero2;

        //Operacion Division
        division=numero1/numero2;
        
        //Imprimiendo Operacion 
        console.log("La suma es "+suma);
        console.log("La resta es "+resta);
        console.log("La multiplicacion es "+multiplicacion);
        console.log("La division es "+division);
    }
}