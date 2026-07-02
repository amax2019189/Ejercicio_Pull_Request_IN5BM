//Sistema de notificaciones multicanal
export abstract class Notificacion {
  constructor(
    public destinatario: string,
    public remitente: string,
    public fechaEnvio: Date
  ) {}

  abstract validarDestinatario(): boolean;
  abstract enviar(mensaje: string): void;

  mostrarInformacion(): void {
    console.log(`Remitente: ${this.remitente}`);
    console.log(`Destinatario: ${this.destinatario}`);
    console.log(`Fecha: ${this.fechaEnvio.toLocaleString()}`);
  }

  protected formatearMensaje(mensaje: string): string {
    return `[${this.fechaEnvio.toLocaleTimeString()}] ${mensaje}`;
  }
}