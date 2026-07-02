import { Notificacion } from "./Notificacion";

export class WhatsApp extends Notificacion {
  validarDestinatario(): boolean {
    return /^\+\d{8,15}$/.test(this.destinatario);
  }

  enviar(mensaje: string): void {
    if (!this.validarDestinatario()) {
      console.log("Número de WhatsApp inválido");
      return;
    }

    console.log("Enviando WHATSAPP...");
    console.log(this.formatearMensaje(mensaje));
  }

  mostrarInformacion(): void {
    console.log(`WhatsApp -> Destinatario: ${this.destinatario} | Fecha: ${this.fechaEnvio}`);
  }
}