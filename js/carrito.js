// Selectores de contenedor
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaProductos = document.querySelector("#lista-productos");

let articulosCarrito = [];

// Funcion para seleccionar el producto con click
function agregarProducto(e) {
  // Evitamos la accion por defecto del boton
  e.preventDefault();
  if (e.target.classList.contains("agregaralcarrito")) {
    // Selecciona el card del producto sobre el que se hizo click
    const productoSeleccionado = e.target.parentElement.parentElement;
    alert("Se agrego el producto al carrito");

    obtenerDatosProducto(productoSeleccionado);
  }
}

listaProductos.addEventListener("click", agregarProducto);

// Funcion para obtener los datos del producto seleccionado
function obtenerDatosProducto(producto) {
  const productoAgregado = {
    imagen: producto.querySelector("img").src,
    nombre: producto.querySelector("h3").textContent,
    precio: producto.querySelector(".precio").textContent,
    total: producto.querySelector(".precio").textContent,
    id: producto.querySelector("button").getAttribute("data-id"),
    cantidad: 1,
  };

  const productoExiste = articulosCarrito.some(
    (producto) => producto.id === productoAgregado.id
  );

  if (productoExiste) {
    /* Agregar al carrito un producto ya existente */
    const productos = articulosCarrito.map((producto) => {
      if (producto.id === productoAgregado.id) {
        producto.cantidad++;
        producto.total = `$${
          Number(productoAgregado.precio.slice(1)) * producto.cantidad
        }`;
        return producto;
      } else {
        return producto;
      }
    });

    articulosCarrito = [...productos];
  } else {
    /*Agregar al carrito producto que no estaba antes*/
    articulosCarrito.push(productoAgregado);
  }

  insertarCarritoHTML();
}

// Para visualizar los productos seleccionados en el carrito
function insertarCarritoHTML() {
  borrarHTML();

  articulosCarrito.forEach((producto) => {
    /* Destrucuring sobre le objeto producto */
    const { nombre, imagen, precio, cantidad, total, id } = producto;

    const row = document.createElement("tr");
    row.innerHTML = `
              <td>
                  <img src="${imagen}" width=100>
              </td>
              <td>
                  ${nombre}
              </td>
              <td>
                  ${precio}
              </td>
              <td>
                  ${cantidad}
        </td>
        <td>
        ${total}
      </td>
              <td>
                  <a href="#" class="borrar-producto" data-id="${id}"> X </a>
              </td>
              
          `;
    contenedorCarrito.appendChild(row);
  });
}

function borrarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
