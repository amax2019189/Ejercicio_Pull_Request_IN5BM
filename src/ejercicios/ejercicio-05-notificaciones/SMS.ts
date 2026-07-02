import { Notificacion } from "./Notificacion";

export class SMS extends Notificacion {
  validarDestinatario(): boolean {
    return /^\+?\d{8,15}$/.test(this.destinatario);
  }

  enviar(mensaje: string): void {
    if (!this.validarDestinatario()) {
      console.log("Número de teléfono inválido");
      return;
    }

    console.log("Enviando SMS...");
    console.log(this.formatearMensaje(mensaje));
  }

  mostrarInformacion(): void {
    console.log(`SMS -> Destinatario: ${this.destinatario} | Fecha: ${this.fechaEnvio}`);
  }
}