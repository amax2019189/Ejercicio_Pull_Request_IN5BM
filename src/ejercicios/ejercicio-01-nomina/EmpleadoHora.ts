import { Empleado } from "./Empleado";

export class EmpleadoHora extends Empleado {

    horasTrabajadas: number = 40;

    constructor() {
        super("Juan", "Calderon", 60, 175, 100);
    }

    calcularPago(): number {
        return this.salario * this.horasTrabajadas + this.bonificacion - this.descuento;
    }

    mostrarInformacion(): void {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Salario por hora: " + this.salario);
        console.log("Horas trabajadas: " + this.horasTrabajadas);
        console.log("Bonificación: " + this.bonificacion);
        console.log("Descuento: " + this.descuento);
    }
}