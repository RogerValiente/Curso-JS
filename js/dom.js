//Funcion encargada de mostrar los elementos
window.onload = function () {
  //Obtener los datos de localStorage
  let productos = window.localStorage.getItem("productos");
  //Pasamos la data a un objeto
  productos = window.JSON.parse(productos);
  //Selecionamos el elemento del HTML
  let listaPostre = document.getElementById("postreCard");
  let listaPasteleria = document.getElementById("pasteleriaCard");
  let listaDetalles = document.getElementById("detallesCard");

  var card = "";
  var card2 = "";
  var card3 = "";

  //Seccion Postres
  if (listaPostre) {
    productos.dataPostres.forEach((data) => {
      card += crearCard(data);
    });
    listaPostre.innerHTML = card;
  }
  //Seccion Pasteleria
  if (listaPasteleria) {
    productos.dataPasteleria.forEach((data) => {
      card2 += crearCard(data);
    });
    listaPasteleria.innerHTML = card2;
  }
  //Seccion Detalles
  if (listaDetalles) {
    productos.dataDetalles.forEach((data) => {
      card3 += crearCard(data);
    });
    listaDetalles.innerHTML = card3;
  }
};

//Funcion para crear las cards para todos los productos
function crearCard(data) {
  /* Destrucuring */
  const { titulo, img, descripcion, precio, id } = data;

  return `
    <div class="card" style="width: 18rem; margin-bottom: 1rem;">
    <div class="card-body">
    <a href="#"><img src=${img} alt="Merengue o suspiro"></a>
    <h3 class="card-title">${titulo}</h3>
    <p class="card-text">${descripcion}</p>
    <h4 class="card-text font-weight-bold">Precio $ ${precio}</h4>
    <button class="btn btn-primary" onclick='agregarProductoCarrito({imagen:"${img}", id: "${id}", nombre: "${titulo}", precio:"${precio}"})'>Agregar al
    carrito</button>
    </div>
    </div>`;
}
