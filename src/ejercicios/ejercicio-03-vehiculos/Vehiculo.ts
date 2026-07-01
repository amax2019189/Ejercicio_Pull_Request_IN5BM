abstract class Vehiculo {
    constructor(
        protected marca: string,
        protected modelo: string,
        protected precioBase: number
    ) {}

    abstract calcularPrecioFinal(): number;
    abstract aplicarDescuento(): number;

    calcularImpuesto(): number {
        return this.precioBase * 0.12;
    }

    mostrarInformacion(): void {
        console.log(`
            -----------------------------            
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Precio Base: Q${this.precioBase.toFixed(2)}
            Precio Final: Q${this.calcularPrecioFinal().toFixed(2)}
            -----------------------------`);
    }
}