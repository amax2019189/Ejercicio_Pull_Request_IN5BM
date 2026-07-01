"use strict";
class Automovil extends Vehiculo {
    constructor(marca, modelo, anio, precioBase, numeroPuertas) {
        super(marca, modelo, anio, precioBase);
        this.numeroPuertas = numeroPuertas;
    }
    aplicarDescuento() {
        if (this.numeroPuertas > 4) {
            return this.precioBase * 0.05; // 5% de descuento
        }
        return 0;
    }
}
