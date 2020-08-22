// Crear la clase Rombo, la cual debe tener dos propiedades: 
// DiagonalVertical y DiagonalHorizontal. añadiremos un constructor al que 
// le pasaremos los valores anteriores cuando instanciemos el objeto. Y también debe 
// de tener un método que calcule el area, que será la multiplicación de 
// DiagonalVertical * DiagonalHorizontal.
// Este método devolverá un número.

class Rombo{

    //Propiedades de las diagonales
    private valor1: number;
    private valor2: number;

    //Metodo que calcula el area
    calculoArea():number{
        return this.valor1*this.valor2;
    };

    //Constructor 
    constructor(valor1:number,valor2:number){
        this.valor1=valor1;
        this.valor2=valor2;
    }
}

