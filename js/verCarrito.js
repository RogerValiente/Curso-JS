function mostrarProductos() {
  //Obtener los datos de localStorage
  let datos = window.localStorage.getItem("carrito");

  //Pasamos la data a un objeto
  datosCarrito = window.JSON.parse(datos);
  const contenedorCarrito = document.querySelector("#lista-carrito tbody");

  datosCarrito.forEach((producto) => {
    /* Destrucuring sobre le objeto producto */
    const { imagen, id, nombre, precio } = producto;

    const row = document.createElement("tr");
    row.innerHTML = `
                <td>
                    ${id}
                </td>
                <td>
                  <img src="${imagen}" width=100>
              </td>
             <td>
                 ${nombre}
             </td>
             <td>
                 ${precio}
             </td>
    `;

    contenedorCarrito.appendChild(row);
  });
}

mostrarProductos();
