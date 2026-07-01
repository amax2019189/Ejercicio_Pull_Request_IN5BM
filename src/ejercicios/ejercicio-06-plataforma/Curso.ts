export abstract class Curso {
    constructor(

        nombre: string;
        informacion: string;
        precio: number;
    ) {
        this.nombre = nombre;
        this.informacion = informacion;
        this.precio = precio;
    }
}
