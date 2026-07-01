import { Empleado } from "./Empleado";

export class EmpleadoFijo extends Empleado {

    constructor() {
        super("Pedro", "Sanchez", 2500, 175, 100);
    }

    calcularPago(): number {
        return this.salario + this.bonificacion - this.descuento;
    }

    mostrarInformacion(): void {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Salario: " + this.salario);
        console.log("Bonificación: " + this.bonificacion);
        console.log("Descuento: " + this.descuento);
    }

}