import { Inventario } from "./Inventario";
import { ProductoNacional } from "./ProductoNacional";
import { ProductoImportado } from "./ProductoImportado";
import { ProductoPerecedero } from "./ProductoPerecedero";

function main(): void {
  const inventario = new Inventario();

  console.log("Sistema de inventario con productos especializados\n");

  console.log("Agregando productos nacionales...");

  const productoNacional1 = new ProductoNacional("PN001", "Camiseta Local Premium", 150, 50, "Textiles Kinal");
  inventario.agregarProducto(productoNacional1);

  const productoNacional2 = new ProductoNacional("PN002", "Zapatos Artesanales", 250, 30, "Zapaterías Locales");
  inventario.agregarProducto(productoNacional2);

  console.log("\nAgregando productos importados...");

  const productoImportado1 = new ProductoImportado("PI001", "Laptop Gamer", 5000, 10, "China", 500);
  inventario.agregarProducto(productoImportado1);

  const productoImportado2 = new ProductoImportado("PI002", "Chocolate Suizo Premium", 100, 200, "Suiza", 150);
  inventario.agregarProducto(productoImportado2);

  console.log("\nAgregando productos perecederos...");

  const fechaProxima = new Date();
  fechaProxima.setDate(fechaProxima.getDate() + 5);

  const productoPerecedero1 = new ProductoPerecedero("PP001", "Leche Fresca", 25, 100, fechaProxima);
  inventario.agregarProducto(productoPerecedero1);

  const fechaMuyProxima = new Date();
  fechaMuyProxima.setDate(fechaMuyProxima.getDate() + 1);

  const productoPerecedero2 = new ProductoPerecedero("PP002", "Pan Integral", 15, 80, fechaMuyProxima);
  inventario.agregarProducto(productoPerecedero2);

  const fechaVigente = new Date();
  fechaVigente.setDate(fechaVigente.getDate() + 20);

  const productoPerecedero3 = new ProductoPerecedero("PP003", "Yogurt Natural", 35, 60, fechaVigente);
  inventario.agregarProducto(productoPerecedero3);

  inventario.mostrarInventarioCompleto();

  console.log("\nEjemplos de operaciones:\n");

  console.log("1. Aplicando descuento del 20% a un producto nacional:");
  const precioConDescuento = productoNacional1.aplicarDescuento(20);
  console.log(`   Precio original: Q${productoNacional1.getPrecio().toFixed(2)}`);
  console.log(`   Precio con descuento: Q${precioConDescuento.toFixed(2)}\n`);

  console.log("2. Actualizando stock:");
  console.log(`   Stock anterior de Leche: ${inventario.obtenerProducto("PP001")?.getStock()} unidades`);
  inventario.actualizarStock("PP001", -20);
  console.log(`   Stock después de venta: ${inventario.obtenerProducto("PP001")?.getStock()} unidades\n`);

  console.log("3. Verificando estado de productos perecederos:");
  const perecible1 = inventario.obtenerProducto("PP001") as ProductoPerecedero;
  const perecible2 = inventario.obtenerProducto("PP002") as ProductoPerecedero;
  console.log(`   ${perecible1.getNombre()}: ${perecible1.estaVencido() ? "vencido" : "vigente"} (${perecible1.getDiasParaVencer()} días)`);
  console.log(`   ${perecible2.getNombre()}: ${perecible2.estaVencido() ? "vencido" : "vigente"} (${perecible2.getDiasParaVencer()} días)\n`);

  console.log("4. Detalles específicos:\n");
  console.log(`   Fabricante de ${productoNacional1.getNombre()}: ${productoNacional1.getFabricante()}`);
  console.log(`   País de origen de ${productoImportado1.getNombre()}: ${productoImportado1.getPaisOrigen()}`);
  console.log(`   Vencimiento de ${productoPerecedero3.getNombre()}: ${productoPerecedero3.getFechaVencimiento().toLocaleDateString("es-GT")}`);
}

main();
