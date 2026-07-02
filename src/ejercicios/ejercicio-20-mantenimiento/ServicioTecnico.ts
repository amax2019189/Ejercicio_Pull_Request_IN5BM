export abstract class ServicioTecnico {
    protected nombreCliente:string;
    protected apellidoCliente:string;
    protected marcaEquipo:string;
    protected problema:string;
    protected costoServicio:number;
    protected costoComponentes:number;
    protected diagnostico:string;

    constructor(nombreCliente:string, apellidoCliente:string, marcaEquipo:string, problema:string, costoServicio:number, costoComponentes:number, diagnostico:string){
        this.nombreCliente=nombreCliente;
        this.apellidoCliente=apellidoCliente;
        this.marcaEquipo=marcaEquipo;
        this.problema=problema;
        this.costoServicio=costoServicio;
        this.costoComponentes=costoComponentes;
        this.diagnostico=diagnostico;
    };

    abstract calcularCosto(costoComponentes: number):number;
    abstract diagnosticar(problema: string, diagnostico: string):void;
    abstract generarReporte():void;
    abstract mostrarInformacion():void;
}