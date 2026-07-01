export class Boleto {
    numeroDeBoleto: number;
    precio: number;
    asientos: number;

    constructor(precio: number, asientos: number) {
        this.numeroDeBoleto = Math.floor(Math.random() * 1000000);
        this.precio = precio;
        this.asientos = asientos;
    }
}