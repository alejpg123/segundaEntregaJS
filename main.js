/*  const productos = [
    {
        nombre:  "guitarra electrica",
        modelo: {
            modelo1: "stratocaster",
            modelo2: "telecaster",
            modelo3: "les paul",
            modelo4: "sg",
            modelo5: "flyng v",
        },
        precio: 600,
    },
    {
        nombre:  "guitarra criolla",
        modelo: {
            modelo1: "concierto",
            modelo2: "estudio",
            modelo3: "electrocriolla",
        },
        precio: 500,
    },
    {
        nombre:  "guitarra acústica",
        modelo: {
            modelo1: "acústica",
            modelo2: "electroacústica",
        },
        precio: 550,
    },
    {
        nombre:  "bajo eléctrico",
        modelo: {
            modelo1: "precision",
            modelo2: "jazz bass",
        },
        precio: 580,
    },
    {
        nombre:  "micrófono",
        modelo: {
            modelo1: "condenser",
            modelo2: "dinámico",
        },
        precio: 350,
    },
    {
        nombre:  "batería",
        modelo: "clásica",
        precio: 750,
    },
    {
        nombre:  "teclado",
        modelo: {
            modelo1: "piano eléctrico",
            modelo2: "sintetizador",
        },
        precio: 650,
    },
];


const busquedaInicial = prompt("Bienvenido a tienda de instrumentos musicales online RockSound. Qué instrumento estas buscando?");

const resultado = productos.filter((el) => el.nombre.includes(busquedaInicial));

if (resultado.length > 0) {
  const primerResultado = resultado[0];

  let modelos = "";
  if (typeof primerResultado.modelo === "object") {
    modelos = Object.values(primerResultado.modelo).join(", ");
  } else {
    modelos = primerResultado.modelo;
  }

  const texto = `Producto: ${primerResultado.nombre}. Modelos: ${modelos}. Precio: $${primerResultado.precio}`;
  const modeloComprado = prompt(`${texto} Qué modelo quiere comprar?`);
    if(primerResultado.modelo[modeloComprado] === modeloComprado) {
        prompt(`Usted va a comprar ${modeloComprado} por $${primerResultado.precio}. Quiere agregar algún producto más?`)
        if (respuesta.toLowerCase() !== "si") {
            alert("Gracias por su compra. ¡Hasta luego!");
          } else {
            while (respuesta.toLowerCase() === "si") {
                let segundaBusqueda = prompt("Qué otro producto quiere comprar?");
                let segundoResultado = productos.filter((el) => el.nombre.includes(segundaBusqueda));

                    if (segundoResultado.length > 0) {
                    let segResultado = segundoResultado[0];

                    let segModelos = "";
                    if (typeof segResultado.modelo === "object") {
                        segModelos = Object.values(segResultado.modelo).join(", ");
                    } else {
                        segModelos = segResultado.modelo;
                    }
                }
                    let segTexto = `Producto: ${segResultado.nombre}. Modelos: ${segModelos}. Precio: $${segResultado.precio}`;
                    let segModeloComprado = prompt(`${segTexto} Qué modelo quiere comprar?`);
                        if(segResultado.modelo[segModeloComprado] === segModeloComprado) {
                         primerResultado.precio = primerResultado.precio + segResultado.precio;
                            prompt(`Usted va a comprar ${modeloComprado} por $${primerResultado.precio}. Quiere agregar algún producto más?`)
                                } else {
                                    alert("El modelo buscado no está disponible para este producto.");
                                  }
                            }
                        }
    } else {
         
      }
} else {
  alert("Lo sentimos, pero no tenemos el producto que esta buscando. Gracias por visitarnos.");
}

*/

const productos = [
    {
      nombre: "guitarra electrica",
      modelo: {
        modelo1: "stratocaster",
        modelo2: "telecaster",
        modelo3: "les paul",
        modelo4: "sg",
        modelo5: "flyng v",
      },
      precio: 600,
    },
    {
      nombre: "guitarra criolla",
      modelo: {
        modelo1: "concierto",
        modelo2: "estudio",
        modelo3: "electrocriolla",
      },
      precio: 500,
    },
    {
      nombre: "guitarra acústica",
      modelo: {
        modelo1: "acústica",
        modelo2: "electroacústica",
      },
      precio: 550,
    },
    {
      nombre: "bajo eléctrico",
      modelo: {
        modelo1: "precision",
        modelo2: "jazz bass",
      },
      precio: 580,
    },
    {
      nombre: "micrófono",
      modelo: {
        modelo1: "condenser",
        modelo2: "dinámico",
      },
      precio: 350,
    },
    {
      nombre: "batería",
      modelo: "clásica",
      precio: 750,
    },
    {
      nombre: "teclado",
      modelo: {
        modelo1: "piano eléctrico",
        modelo2: "sintetizador",
      },
      precio: 650,
    },
  ];
  
  const busquedaInicial = prompt("Bienvenido a la tienda de instrumentos musicales online RockSound. ¿Qué instrumento estás buscando?");

  const resultado = productos.filter((el) => el.nombre.includes(busquedaInicial));
  
  if (resultado) {
    const primerResultado = resultado;
  
    let modelos = "";
    if (typeof primerResultado.modelo === "object") {
      modelos = Object.values(primerResultado.modelo).join(", ");
    } else {
      modelos = primerResultado.modelo;
    }
  
    let precioTotal = primerResultado.precio;
  
    const texto = `Producto: ${primerResultado.nombre}. Modelos: ${modelos}. Precio: $${precioTotal}`;
    const modeloComprado = prompt(`${texto} ¿Qué modelo quieres comprar?`);
  
    if (primerResultado.modelo[modeloComprado] === modeloComprado) {
      let respuesta = prompt(`Usted va a comprar ${modeloComprado} por $${precioTotal}. ¿Quiere agregar algún producto más?`);
  
      while (respuesta.toLowerCase() === "si") {
        const segundaBusqueda = prompt("¿Qué otro producto quiere comprar?");
        const segundoResultado = productos.find((el) => el.nombre.toLowerCase() === segundaBusqueda.toLowerCase());
  
        if (segundoResultado) {
          const segModelos = Object.values(segundoResultado.modelo).join(", ");
          const segTexto = `Producto: ${segundoResultado.nombre}. Modelos: ${segModelos}. Precio: $${segundoResultado.precio}`;
          const segModeloComprado = prompt(`${segTexto} ¿Qué modelo quiere comprar?`);
  
          if (segResultado.modelo[segModeloComprado] === segModeloComprado) {
            precioTotal += segundoResultado.precio;
            respuesta = prompt(`Usted va a comprar ${modeloComprado} y ${segModeloComprado} por $${precioTotal}. ¿Quiere agregar algún producto más?`);
          } else {
            alert("El modelo buscado no está disponible para este producto.");
            respuesta = prompt("¿Quiere agregar algún producto más?");
          }
        } else {
          alert("No se encontró el segundo producto. Operación cancelada.");
          break;
        }
      }
  
      alert(`Gracias por su compra. El total a pagar es $${precioTotal}. ¡Hasta luego!`);
    } else {
      alert("El modelo buscado no está disponible para este producto.");
    }
  } else {
    alert("Lo sentimos, pero no tenemos el producto que está buscando. Gracias por visitarnos.");
  }