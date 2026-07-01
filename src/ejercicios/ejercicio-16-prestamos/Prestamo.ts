export abstract class Prestamo {
    constructor(
        public nombreCliente: string,
        public monto: number,
        public plazoMeses: number
    ) {}

    abstract calcularCuotaMensual(): number;
    abstract calcularInteresTotal(): number;
    
    public mostrarInformacion(): void {
        console.log(`Cliente: ${this.nombreCliente}`);
        console.log(`Monto: Q${this.monto}`);
        console.log(`Plazo: ${this.plazoMeses} meses`);
        console.log(`Cuota Mensual: Q${this.calcularCuotaMensual()}`);
        console.log(`Interes Total: Q${this.calcularInteresTotal()}`);
        console.log(`Monto Valido: ${this.validarMonto()}`);
    }

    public validarMonto(): boolean {
        return this.monto > 0;
    }
}