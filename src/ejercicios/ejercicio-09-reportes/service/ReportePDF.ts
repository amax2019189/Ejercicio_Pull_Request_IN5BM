import { Reporte } from "../model/Reporte";

export class ReportePDF extends Reporte{

    constructor(
        id: number,
        fecha: Date,
        titulo: string,
        asunto: string,
        reporte: string
    ){
        super(id, fecha, titulo, asunto, reporte);
    }

    generarDatos(): void {
        throw new Error("Generando PDF...");
    }
    mostrarDatos(): void {
        throw new Error("Id: " + this.id + "fecha: "+ this.fecha + "titulo: "+ this.titulo + "asunto: "+ this.asunto + "reporte: "+ this.reporte);
    }

}