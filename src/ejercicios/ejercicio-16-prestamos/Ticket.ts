export abstract class Ticket {
    constructor(
        public idTicket: string,
        public descripcion: string,
        public precioBase: number
    ) {}
    abstract calcularPrecioFinal(): number;
    abstract aplicarDescuento(): number;

    public mostrarInformacion(): void {
        console.log(`Ticket ID: ${this.idTicket}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Precio Base: Q${this.precioBase.toFixed(2)}`);
        console.log(`Descuento: -Q${this.aplicarDescuento().toFixed(2)}`);
        console.log(`Precio Final: Q${this.calcularPrecioFinal().toFixed(2)}`);
        console.log(`Estado de Validación: ${this.validarTicket() ? ' Activo / Valido' : ' Inválido / Revisar'}`);
    }
    public validarTicket(): boolean {
        return this.precioBase > 0 && this.idTicket.length > 0;
    }
}