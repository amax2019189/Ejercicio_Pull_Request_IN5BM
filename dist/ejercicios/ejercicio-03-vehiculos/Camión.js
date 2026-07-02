"use strict";
class Camion extends Vehiculo {
    constructor(marca, modelo, anio, precioBase, capacidadCarga) {
        super(marca, modelo, anio, precioBase);
        this.capacidadCarga = capacidadCarga;
    }
    aplicarDescuento() {
        if (this.capacidadCarga > 5000) {
            return this.precioBase * 0.07; // 7% de descuento
        }
        return 0;
    }
}
