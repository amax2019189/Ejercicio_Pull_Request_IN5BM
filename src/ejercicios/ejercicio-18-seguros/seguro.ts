 export abstract class Seguro {
    protected nombre: String;
    protected edad: String;
    protected montoAsegurado: number;

    constructor(nombre: String, edad: number, montoAsegurado: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.montoAsegurado = montoAsegurado;
    }
    abstract calcularPrima(): number;
    abstract calcularCobertura(): number;
    abstract mostrarInformacion(): void;

    validarCliente(): boolean {
        return this.edad >= "18";
    }
    }
