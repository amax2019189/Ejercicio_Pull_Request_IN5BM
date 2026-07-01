export abstract class ServicioTecnico {
    problema:string;
    costoServicio:number;
    costoComponentes:number;
    comentario:string;

    constructor(problema:string, costoServicio:number, costoComponentes:number, comentario:string){
        this.problema=problema;
        this.costoServicio=costoServicio;
        this.costoComponentes=costoComponentes;
        this.comentario=comentario;
    };

    abstract calcularCosto():number;
    abstract diagnosticar():void;
    abstract generarReporte():void;
    abstract mostrarInformacion():void;
}