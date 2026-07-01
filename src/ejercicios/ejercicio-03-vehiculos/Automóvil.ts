class Automovil extends Vehiculo {

    aplicarDescuento(): number {
        return this.precioBase * 0.05;
    }

    calcularPrecioFinal(): number {
        return this.precioBase + this.calcularImpuesto() - this.aplicarDescuento();
    }
}
