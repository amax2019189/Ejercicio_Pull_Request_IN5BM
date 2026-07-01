abstract class Producto {
    // Mínimo 3 atributos requeridos
    protected id: string;
    protected nombre: string;
    protected precioBase: number;
    protected stock: number;

    constructor(id: string, nombre: string, precioBase: number, stock: number) {
        this.id = id;
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.stock = stock;
    }
    }