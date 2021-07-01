//Variable que alamacena los productos agregados en la array
let articulosCarrito = [];

//Evento para añadir un producto al carrito de compra
const agregarProductos = (e) => {
  const existe = articulosCarrito.some((producto) => producto.id === e.id);

  if (existe) {
    /* Agregar al carrito un producto ya existente */
    const productos = articulosCarrito.map((producto) => {
      if (producto.id === e.id) {
        producto.cantidad++;
        producto.total = `$${
          Number(producto.precio.slice(1)) * producto.cantidad
        }`;
        return producto;
      } else {
        return producto;
      }
    });

    articulosCarrito = [...productos];
  } else {
    /*Agregar al carrito producto que no estaba antes*/
    articulosCarrito.push(e);
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

  guardarStorage();
  toastr.success("Se agrego el producto al carrito");
  generarCarrito();
  actualizarContador();
};

//Funcion para guardar la informacion en localStorage
function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}

//Funcion de contar la cantidad de los productos selecionados
function actualizarContador() {
  //variable para obtener los datos de localStorage
  let todosLosProds = window.localStorage.getItem("carrito");
  todosLosProds = JSON.parse(todosLosProds);
  //Mostrar la cantidad de productos selecionada al lado de la imagen del carrito
  document.querySelector("#cantidad").innerHTML = todosLosProds
    ? todosLosProds.length
    : 0;
}

//Funcion para sumar el subtotal de los productos
function productoSubtotal(precio, cantidad) {
  precio = parseInt(precio.replace(/[$.]/g, ""));

  return cantidad * precio;
}

//Funcion para eliminar varios productos de un mismo id
function eliminarProducto(productoId) {
  articulosCarrito = articulosCarrito.filter(
    (producto) => parseInt(producto.id) !== productoId
  );
  generarCarrito();
  guardarStorage();
  actualizarContador();
}

//Funcion para eliminar todos los productos del carrito
function vaciarCarrito() {
  articulosCarrito = [];
  guardarStorage();
  actualizarContador();
  generarCarrito();
}

//Para redireccionar a la pagina de compra
function rederigirCheckout() {
  window.open("/checkout.html", "_parent");
}

actualizarContador();

function retornarDatos() {
  let datos = window.localStorage.getItem("carrito");
  return datos && datos.length > 1 ? JSON.parse(datos) : [];
}

function rederigirCheckout() {
  if (retornarDatos().length < 1) {
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
    toastr.error("No hay productos agregados");
    return;
  }
  window.open("comprar.html", "_parent");
}
