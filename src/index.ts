/*
    | Ejercicios de Clase |

    1. Sistema de nómina empresarial
    2. Sistema de pagos con validaciones
    3. Gestión de vehiculos en venta
    4. Inventario con productos especializados
    5. Sistema de notificaciones multicanal
    6. Plataforma de cursos online
    7. Sistema bancario
    8. Videojuego RPG
    9. Sistema de reportes empresariales
    10. Sistema de tickets para visitas empresariales
    11. Sistema de reservas de hoteles
    12. Sistema de envíos de paquetes
    13. Sistema de biblioteca
    14. Sistema de parqueo
    15. Sistema de ventas de boletos
    16. Sistema de préstamos bancarios
    17. Sistema de restaurantes
    18. Sistema de seguros
    19. Sistema de transporte público
    20. Sistema de mantenimiento técnico
    21. Sistema de facturación
    22. Sistema de clínicas médicas
    23. Sistema de gimnasio
    24. Sistema de delivery
    25. Sistema de inscripción estudiantil
*/

// EJercicio 3 - Brandon Orellana
import { Vehiculo } from "./ejercicios/ejercicio-03-vehiculos/Vehiculo";
import { Automovil } from "./ejercicios/ejercicio-03-vehiculos/Automovil";
import { Motocicleta } from "./ejercicios/ejercicio-03-vehiculos/Motocicleta";
import { Camion } from "./ejercicios/ejercicio-03-vehiculos/Camion";
import promptSync from 'prompt-sync';
const prompt = promptSync();

const inventario: Vehiculo[] = [
  new Automovil("Toyota", "Corolla", 2023, 120000, 4),
  new Motocicleta("Yamaha", "FZ150", 2022, 15000, 150),
  new Camion("Isuzu", "NPR", 2021, 350000, 4000),
  new Automovil("Kia", "Rio", 2024, 95000, 4),
];

function mostrarMenu(): void {
  console.log(`
SISTEMA DE GESTIÓN DE VEHÍCULOS  
------------------------------------------
  1. Ver inventario                     
  2. Agregar automóvil                  
  3. Agregar motocicleta                
  4. Agregar camión                     
  5. Salir                              
------------------------------------------
  `);
}

function mostrarInventario(): void {
  console.log("\n-------------- INVENTARIO DISPONIBLE --------");
  if (inventario.length === 0) {
    console.log("El inventario está vacío.");
  } else {
    inventario.forEach((vehiculo: Vehiculo) => vehiculo.mostrarInformacion());
    console.log(`--------------------------------------`);
    console.log(`Total de vehículos en inventario: ${inventario.length}`);
  }
  menuPrincipal(); // Volver al menú después de mostrar
}

function menuPrincipal(): void {
  mostrarMenu();
  const opcion = prompt("Seleccione una opción (1-5): ");

  switch (opcion) {
    case "1":
      mostrarInventario();
      break;
    case "2":
      const marcaA = prompt("Marca: ");
      const modeloA = prompt("Modelo: ");
      const anioA = parseInt(prompt("Año: ") || "0");
      const precioA = parseFloat(prompt("Precio base: Q") || "0");
      const puertas = parseInt(prompt("Número de puertas: ") || "0");
      inventario.push(new Automovil(marcaA, modeloA, anioA, precioA, puertas));
      console.log(`Automóvil "${marcaA} ${modeloA}" agregado exitosamente!`);
      menuPrincipal(); // Volver al menú después de agregar
      break;
    case "3":
      const marcaM = prompt("Marca: ");
      const modeloM = prompt("Modelo: ");
      const anioM = parseInt(prompt("Año: ") || "0");
      const precioM = parseFloat(prompt("Precio base: Q") || "0");
      const cilindrada = parseInt(prompt("Cilindrada (cc): ") || "0");
      inventario.push(new Motocicleta(marcaM, modeloM, anioM, precioM, cilindrada));
      console.log(`Motocicleta "${marcaM} ${modeloM}" agregada exitosamente!`);
      menuPrincipal(); // Volver al menú después de agregar
      break;
    case "4":
      const marcaC = prompt("Marca: ");
      const modeloC = prompt("Modelo: ");
      const anioC = parseInt(prompt("Año: ") || "0");
      const precioC = parseFloat(prompt("Precio base: Q") || "0");
      const capacidad = parseInt(prompt("Capacidad de carga (kg): ") || "0");
      inventario.push(new Camion(marcaC, modeloC, anioC, precioC, capacidad));
      console.log(`Camión "${marcaC} ${modeloC}" agregado exitosamente!`);
      menuPrincipal(); // Volver al menú después de agregar
      break;
    case "5":
      console.log("\nGracias por usar el sistema");
      return;
    default:
      console.log("Opción no válida. Por favor, seleccione 1-5.");
      menuPrincipal(); // Volver al menú si opción inválida
      break;
  }
}

console.log("Bienvenido al Sistema de Gestión de Vehículos");
menuPrincipal();