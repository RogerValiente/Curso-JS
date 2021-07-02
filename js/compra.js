//Se trae los datos de localStorage.
function retornarDatos() {
  let datos = window.localStorage.getItem("carrito");
  return datos && datos.length > 1 ? JSON.parse(datos) : [];
}

//Se guardan los datos en localStorage.
function guardarDatos(datos) {
  localStorage.setItem("carrito", JSON.stringify(datos));
}

//Funcion para eliminar todos los productos de un mismo ID.
function eliminarProducto(productoId) {
  const nuevoProductos = retornarDatos().filter((p) => p.id != productoId);

  guardarDatos(nuevoProductos);
  actualizarTodo();
}

//funcion para aumentar la cantidad de un producto.
function agregarProducto(productoId) {
  let index = retornarDatos().findIndex((x) => parseInt(x.id) === productoId);
  const otrosProductos = retornarDatos().filter(
    (p) => parseInt(p.id) !== productoId
  );

  const productoAumentado = retornarDatos().filter(
    (p) => parseInt(p.id) === productoId
  );

  parseInt(productoAumentado[0]).cantidad = ++productoAumentado[0].cantidad;
  otrosProductos.splice(index, 0, ...productoAumentado);
  guardarDatos(otrosProductos);
  actualizarTodo();
}

//funcion para disminuir la cantidad de un producto.
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

//Funcion para ver el total de un mismo producto.
function productoSubtotal(precio, cantidad) {
  precio = parseInt(precio.replace(/[$.]/g, ""));

  return cantidad * precio;
}

//Funcion para simular los datos del cliente.
function mySubmitFunction(e) {
  e.preventDefault();
  let cliente = document.querySelector("#cliente").value;
  let correo = document.querySelector("#correo").value;
  let nombreTarjeta = document.querySelector("#nombreTarjeta").value;
  let numeroTarjeta = document.querySelector("#numeroTarjeta").value;
  if (
    cliente == "" ||
    correo == "" ||
    nombreTarjeta == "" ||
    numeroTarjeta == ""
  ) {
    toastr.error("Por favor llenar todo los campos");
    return;
  }
  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-bottom-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  guardarDatos([]);
  actualizarTodo();
  toastr.success("Se realizo la compra exitosamente");
  setTimeout(() => {
    window.open("/index.html", "_parent");
  }, 3000);
  return false;
}

//Funcion para mostrar los productos seleccionados.
function generarTablaCompras(articulosCarrito = []) {
  let compraCarrito = document.querySelector("#tablafinalcompras");
  compraCarrito.innerHTML = null;

  retornarDatos().forEach((producto) => {
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
                 <button class="btn btn-primary" onclick="restarProducto(${id})"> - </button>
                     ${cantidad}
                 <button class="btn btn-primary" onclick="agregarProducto(${id})"> + </button>
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
}

//Funcion para mostrar el valor total a pagar.
function valorTotal() {
  let subTotal = retornarDatos().reduce(
    (acumulador, producto) =>
      acumulador +
      producto.cantidad * parseInt(producto.precio.replace(/[$.]/g, "")),
    0
  );
  let iva = subTotal * 0.19;
  let total = iva + subTotal;
  console.log(subTotal);
  document.querySelector("#checkOutSubTotal").innerText = subTotal;
  document.querySelector("#checkOutIva").innerHTML = iva;
  document.querySelector("#checkOutTotal").innerHTML = total;
}

//Funcion para actualizar
function actualizarTodo() {
  generarTablaCompras();
  valorTotal();
}

actualizarTodo();
