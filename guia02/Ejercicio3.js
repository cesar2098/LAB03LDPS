/*Crear una clase Empleado, con las propiedades nombre, salario,
añadiremos un constructor al que le pasaremos los valores anteriores
cuando instanciemos el objeto. Y también debe de tener un método que
 calcule deducciones salariales,
Este método devolverá el salario después de los descuentos.*/
var Empleado = /** @class */ (function () {
    //Constructor 
    function Empleado(name, salary) {
        this.nombre = name;
        this.salario = salary;
    }
    Empleado.prototype.calculoSalario = function (salamrio) {
        var descuentoAFP = salario * .0725;
        var descuentoISS = salario * .03;
        var descuentoRenta = 0;
        // if (salario<487.60 ) {
        //     var descuentoRenta = 0;
        // }
        if (salario >= 487.60 && salario <= 642.85) {
            descuentoRenta = salario * 0.1;
        }
        if (salario >= 642.86 && salario <= 915.81) {
            descuentoRenta = salario * 0.1;
        }
        if (salario >= 915.82 && salario <= 2058.67) {
            descuentoRenta = salario * 0.2;
        }
        if (salario >= 2058.68) {
            descuentoRenta = salario * 0.3;
        }
        var salarioLiquido = salario - descuentoISS - descuentoAFP - descuentoRenta;
        return salarioLiquido;
    };
    return Empleado;
}());
