let contenedorCarrito = document.querySelector("#tablafinalcompras");

document.addEventListener("DOMContentLoaded", () => {
  articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

  generarCarrito();
});

window.onload = function () {
  var card = "";
  var card1 = "";
  var card2 = "";
  //Selecionamos el elemento del HTML
  let listaPostre = document.getElementById("postreCard");
  let listaPasteleria = document.getElementById("pasteleriaCard");
  let listaDetalles = document.getElementById("detallesCard");

  // Se hace peticion http para adquirir los datos del JSON
  fetch("/js/api.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      if (listaPostre) {
        datos.forEach((data, index) => {
          if (index < 9) {
            card += crearCard(data);
          }
        });
        listaPostre.innerHTML = card;
      }

      if (listaPasteleria) {
        datos.forEach((data, index) => {
          if (index > 8 && index < 18) {
            card1 += crearCard(data);
          }
        });
        listaPasteleria.innerHTML = card1;
      }

      if (listaDetalles) {
        datos.forEach((data, index) => {
          if (index > 17 && index < 27) {
            card2 += crearCard(data);
          }
        });
        listaDetalles.innerHTML = card2;
      }
    });
};

//Funcion para crear las cards para todos los productos
function crearCard(datos) {
  /* Destrucuring */
  const { nombre, imagen, descripcion, precio, id, cantidad } = datos;

  return `
  <div class="card" style="width: 18rem; margin-bottom: 1rem;">
  <div class="card-body">
  <a href="#"><img src=${imagen} alt="Merengue o suspiro"></a>
  <h3 class="card-title">${nombre}</h3>
  <p class=" card-text">${descripcion}</p>
  <h4 class="card-text font-weight-bold">Precio $ ${precio}</h4>
  <h5 class="id card-text">ID: ${id}</h5>
    <button class="btn btn-primary" onclick='agregarProductos({imagen:"${imagen}", cantidad:"${cantidad}", id:"${id}", nombre: "${nombre}", precio:"${precio}"})'>Agregar al
    carrito</button>
    </div>
    </div>`;
}

//Dibuja todos los productos guardados en el carrito
function generarCarrito() {
  borrarHTML();

  articulosCarrito.forEach((producto) => {
    /* Destrucuring sobre le objeto producto */
    const { nombre, imagen, precio, cantidad, id } = producto;

    const row = document.createElement("tr");
    row.innerHTML = `
               <td>
                   <img src="${imagen}" width=100>
               </td>
               <td>
                   ${nombre}
               </td>
               <td >
                   ${precio}
               </td>
               <td class="text-center">
                   ${cantidad}
               </td>
              
              
           <td>
               ${productoSubtotal(precio, cantidad)}
           </td>
             
               <td>
                   <button class="btn btn-primary" onclick="eliminarProducto(${id})"> X </button>
               </td>
  
           `;
    contenedorCarrito.appendChild(row);
  });
  guardarStorage();
}

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}

function borrarHTML() {
  /* Forma rapida */
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
