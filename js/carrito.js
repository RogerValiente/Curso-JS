//Variable que alamacena los productos agregados en la array
let articulosCarrito = [];

//Evento para añadir un producto al carrito de compra
const agregarProductoCarrito = (e) => {
  articulosCarrito.push(e);
  alert("Se agrego producto al carrito");
  guardarEnLocalStotage();
  actualizarContador();
  generarTablaCompras();
};

//Funcion para guardar la informacion en localStorage
const guardarEnLocalStotage = () => {
  window.localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
};

//Funcion de contar la cantidad de los productos selecionados
const actualizarContador = () => {
  //variable para obtener los datos de localStorage
  let todosLosProds = window.localStorage.getItem("carrito");
  todosLosProds = JSON.parse(todosLosProds);
  //Mostrar la cantidad de productos selecionada al lado de la imagen del carrito
  document.querySelector("#cantidad").innerHTML = todosLosProds
    ? todosLosProds.length
    : 0;
};

function rederigirCheckout() {
  window.open("/comprar.html", "_parent");
}

actualizarContador();
