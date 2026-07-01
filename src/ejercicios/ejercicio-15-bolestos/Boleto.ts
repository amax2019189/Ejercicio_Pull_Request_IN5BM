// Clase Padre Abstracta 
export abstract class Boleto {
    codigo: number;
    nombreEvento: string;
    precioBase: number;

    constructor(codigo: number, nombreEvento: string, precioBase: number) {
        this.codigo = codigo;
        this.nombreEvento = nombreEvento;
        this.precioBase = precioBase;
    }

    // Métodos obligatorios 
    abstract aplicarDescuento(): number;
    abstract calcularPrecioFinal(): number;

    mostrarInformacion(): void {
        console.log(`Boleto Código: ${this.codigo}
            | Evento: ${this.nombreEvento} 
            | Precio Base: Q${this.precioBase}`);
    }
}