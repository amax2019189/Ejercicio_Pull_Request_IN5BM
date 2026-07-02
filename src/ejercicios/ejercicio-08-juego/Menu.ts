import { Personaje } from "./Personaje";
import { Arquero } from "./Arquero";
import { Guerrero } from "./Guerrero";
import { Mago } from "./Mago";

const personajes: Personaje[] = [
    new Arquero("Green arrow", 100, 15, 80),
    new Guerrero("Kratos", 150, 20, 30),
    new Mago("Harry Potter", 80, 10, 50)
];

export function iniciarMenu(): void {
  console.log("-- Personajes --");
  personajes.forEach((p) => p.mostrarInformacion());


  console.log("\n-- Ataque --");
  personajes.forEach((p) => {
    const danio = p.atacar();
    console.log(`>> Daño causado por ${p.nombre}: ${danio}`);
  });
 
  console.log("\n-- Habilidades especiales --");
  personajes.forEach((p) => p.habilidadEspecial());
 
  console.log("\n-- Daños --");
  personajes.forEach((p) => p.recibirDanio(50));
 
  console.log("\n-- Información  --");
  personajes.forEach((p) => p.mostrarInformacion());
}




