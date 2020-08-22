// Crear la clase Rombo, la cual debe tener dos propiedades: 
// DiagonalVertical y DiagonalHorizontal. añadiremos un constructor al que 
// le pasaremos los valores anteriores cuando instanciemos el objeto. Y también debe 
// de tener un método que calcule el area, que será la multiplicación de 
// DiagonalVertical * DiagonalHorizontal.
// Este método devolverá un número.
var Rombo = /** @class */ (function () {
    //Constructor 
    function Rombo(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    //Metodo que calcula el area
    Rombo.prototype.calculoArea = function () {
        return this.valor1 * this.valor2;
    };
    ;
    return Rombo;
}());
