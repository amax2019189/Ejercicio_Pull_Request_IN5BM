import { Empleado } from "./Empleado";

export class EmpleadoComision extends Empleado {

    comision: number = 15000;


    constructor() {
        super("Maria", "Gonzalez", 0.25, 175, 100);
    }

    calcularPago(): number {
        return this.salario * this.comision + this.bonificacion - this.descuento;
    }

    mostrarInformacion(): void {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Salario por comisión: " + this.salario);
        console.log("Comisión: " + this.comision);
        console.log("Bonificación:" + this.bonificacion);
        console.log("Descuento:" + this.descuento);
    }

}