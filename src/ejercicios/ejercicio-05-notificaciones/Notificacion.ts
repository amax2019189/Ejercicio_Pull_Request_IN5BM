//Sistema de notificaciones multicanal
export abstract class Notificacion {
    destinatario: string;
    mensaje: string;
    fechaEnvio: Date;

    constructor(destinatario: string, mensaje: string) {
        this.destinatario = destinatario;
        this.mensaje = mensaje;
        this.fechaEnvio = new Date();
    }

    abstract validarDestinatario(): boolean;
    abstract enviar(mensaje: string): void;
    abstract mostrarInformacion(): void;

    formatearMensaje(mensaje: string): string {
        const texto = mensaje.trim();
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }
}
