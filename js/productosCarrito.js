//Tomar datos de localstorage
function retornarDatos() {
  let datos = window.localStorage.getItem("carrito");
  return datos && datos.length > 1 ? JSON.parse(datos) : [];
}

//se guarda los datos en localStorage
function guardarDatos(datos) {
  localStorage.setItem("carrito", JSON.stringify(datos));
}

//Funcion para eliminar varios productos de un mismo id
function eliminarProducto(productoId) {
  const nuevoProductos = retornarDatos().filter((p) => p.id != productoId);
  guardarDatos(nuevoProductos);
  actualizarTodo();
}

//Funcion para aumentar la contidad de productos
function aumentarProducto(productoId) {
  let index = retornarDatos().findIndex((x) => parseInt(x.id) === productoId);
  const otrosProductos = retornarDatos().filter(
    (p) => parseInt(p.id) !== productoId
  );
  const productoAumentado = retornarDatos().filter(
    (p) => parseInt(p.id) === productoId
  );
  productoAumentado[0].cantidad = productoAumentado[0].cantidad + 1;
  otrosProductos.splice(index, 0, ...productoAumentado);

  guardarDatos(otrosProductos);
  actualizarTodo();
}

//Funcion para disminuir la cantidad de productos
function restarProducto(productoId) {
  let index = retornarDatos().findIndex((x) => parseInt(x.id) === productoId);
  const otrosProductos = retornarDatos().filter(
    (p) => parseInt(p.id) !== productoId
  );
  const productoReducido = retornarDatos().filter(
    (p) => parseInt(p.id) === productoId
  );
  if (productoReducido[0].cantidad > 1) {
    productoReducido[0].cantidad = productoReducido[0].cantidad - 1;
    otrosProductos.splice(index, 0, ...productoReducido);
    guardarDatos(otrosProductos);
  }
  actualizarTodo();
}

//Funcion para sumar el subtotal de los productos
function productoSubtotal(precio, cantidad) {
  precio = parseInt(precio.replace(/[$.]/g, ""));

  return cantidad * precio;
}

//Dibuja todos los productos guardados en el carrito
function generarTablaCompras() {
  let compraCarrito = document.querySelector("#tablafinalcompras");
  compraCarrito.innerHTML = null;

  retornarDatos().forEach((producto) => {
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
               <td>
                   ${precio}
               </td>
               <td>
               <button class="btn-primary font-weight-bold" onclick="restarProducto(${id})"> - </button>
                   ${cantidad}
               <button class="btn-primary font-weight-bold" onclick="aumentarProducto(${id})"> + </button>
           </td>
           <td>
               ${productoSubtotal(precio, cantidad)}
           </td>
             
               <td>
                   <button class="btn btn-primary" onclick="eliminarProducto(${id})"> X </button>
               </td>
  
           `;
    compraCarrito.appendChild(row);
  });
  guardarEnLocalStotage;
}

function actualizarTodo() {
  generarTablaCompras();
  actualizarContador();
}

actualizarTodo();
