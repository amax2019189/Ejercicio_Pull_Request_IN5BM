import { EstadoTicket } from './EstadoTicket';

export abstract class Ticket {
    protected id: string;
    protected nombreVisitante: string;
    protected empresaOrigen: string;
    protected estado: EstadoTicket;

    constructor(nombreVisitante: string, empresaOrigen: string) {
        this.id = `VST-${Math.floor(1000 + Math.random() * 9000)}`;
        this.nombreVisitante = nombreVisitante;
        this.empresaOrigen = empresaOrigen;
        this.estado = EstadoTicket.ABIERTO;
    }

    public cambiarEstado(nuevoEstado: EstadoTicket): void {
        this.estado = nuevoEstado;
        console.log("El ticket cambio a: "+ );
    }

    public cerrarTicket(): void {
        this.estado = EstadoTicket.CERRADO;
        console.log();
    }

    public abstract procesarFlujo(): void;
    public abstract mostrarInformacion(): void;
}