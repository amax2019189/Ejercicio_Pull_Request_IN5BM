"use strict";
class Motocicleta extends Vehiculo {
    constructor(marca, modelo, anio, precioBase, cilindrada) {
        super(marca, modelo, anio, precioBase);
        this.cilindrada = cilindrada;
    }
    aplicarDescuento() {
        if (this.cilindrada > 500) {
            return this.precioBase * 0.03; // 3% de descuento
        }
        return 0;
    }
}
