import { Reporte } from "../model/Reporte";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

export class ReporteExcel extends Reporte{

    //Constructor
    constructor(
        id: number,
        fecha: Date,
        titulo: string,
        asunto: string,
        reporte: string
    ){
        //Segun la IA "super" se usa para mandar los datos a la clase padre
        super(id, fecha, titulo, asunto, reporte);
    }

    generarDatos(): void {
        console.log("Generando archivo .xlsx ...")
    }

    mostrarDatos(): void {
        console.log("Id: " + this.id + "fecha: "+ this.fecha + "titulo: "+ this.titulo + "asunto: "+ this.asunto + "reporte: "+ this.reporte)
    }
}