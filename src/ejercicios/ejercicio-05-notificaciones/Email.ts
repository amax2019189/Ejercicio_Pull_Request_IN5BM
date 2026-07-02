import { Notificacion } from "./Notificacion";

export class Email extends Notificacion {
  validarDestinatario(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.destinatario);
  }

  enviar(mensaje: string): void {
    if (!this.validarDestinatario()) {
      console.log("Correo electrónico inválido");
      return;
    }

    console.log("Enviando EMAIL...");
    console.log(this.formatearMensaje(mensaje));
  }

  mostrarInformacion(): void {
  console.log(`Email -> Destinatario: ${this.destinatario} | Fecha: ${this.fechaEnvio}`);
}
}