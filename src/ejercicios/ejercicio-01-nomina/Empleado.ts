export abstract class Empleado {
    nombre: string;
    apellido: string;
    salario: number;
    bonificacion: number = 175;
    descuento: number = 100;

    constructor(nombre: string, apellido: string, salario: number, bonificacion: number, descuento: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
        this.bonificacion = bonificacion;
        this.descuento = descuento;
    }

    abstract calcularPago(): number;

    abstract mostrarInformacion(): void;
}

