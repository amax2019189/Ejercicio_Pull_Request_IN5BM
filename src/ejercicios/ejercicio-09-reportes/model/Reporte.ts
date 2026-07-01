export class Reporte{
    id: number;
    fecha: string;
    emisor: string;
    asunto: string;
    reporte: string;

    controller(
        id: number,
        fecha: string,
        emisor: string,
        asunto: string,
        reporte: string
    ){
        this.id = id;
        this.fecha = fecha;
        this.emisor = emisor;
        this.asunto = asunto;
        this.reporte = reporte;
    }
}