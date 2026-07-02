"use strict";
class Vehiculo {
    constructor(marca, modelo, anio, precioBase) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precioBase = precioBase;
    }
    calcularImpuesto() {
        return this.precioBase * 0.12;
    }
    aplicarDescuento() {
        return 0;
    }
    calcularPrecioFinal() {
        const impuesto = this.calcularImpuesto();
        const descuento = this.aplicarDescuento();
        return this.precioBase + impuesto - descuento;
    }
    mostrarInformacion() {
        console.log(`--------------------------------------`);
        console.log(`Tipo: ${this.constructor.name}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Año: ${this.anio}`);
        console.log(`Precio base: Q${this.precioBase.toFixed(2)}`);
        console.log(`Impuesto: Q${this.calcularImpuesto().toFixed(2)}`);
        console.log(`Descuento: Q${this.aplicarDescuento().toFixed(2)}`);
        console.log(`PRECIO FINAL: Q${this.calcularPrecioFinal().toFixed(2)}`);
    }
}
