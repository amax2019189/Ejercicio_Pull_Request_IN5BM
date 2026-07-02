import { Habitacion, EstadoHabitacion } from "./Habitacion";
import { HabitacionSimple } from "./HabitacionSimple";
import { HabitacionDoble, TipoDeVista } from "./HabitacionDoble";
import { Suite } from "./Suite";

export class Menu {
    static iniciar(): void {
        const habitaciones: Habitacion[] = [
            new HabitacionSimple(101, "Pequeña", 1, EstadoHabitacion.DISPONIBLE, 40),
            new HabitacionDoble(102, "Mediana", 2, EstadoHabitacion.DISPONIBLE, 70, true, TipoDeVista.MAR),
            new Suite(103, "Grande", 4, EstadoHabitacion.DISPONIBLE, 150, ["jacuzzi", "minibar"], 6)
        ];

        const cantidadDeNoches = 3;

        console.log("=== Sistema de Reservas de Hotel ===");
        console.log("---");

        habitaciones.forEach((habitacion) => {
            habitacion.mostrarInformacion();

            if (habitacion instanceof HabitacionDoble || habitacion instanceof Suite) {
                habitacion.mostrarServicios();
            }

            console.log("Costo de la reserva:", habitacion.calcularCostoReserva(cantidadDeNoches));
            console.log("---");
        });
    }
}