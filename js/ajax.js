//Aplicando Ajax

function obtenerDatos() {
  console.log("funcion activada");

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "js/api.json", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      console.log(datos);
      let respuesta = document.querySelector("#respuesta");
      respuesta.innerHTML = "";

      for (let item of datos) {
        respuesta.innerHTML += `
          <div class="card" style="width: 18rem; margin-bottom: 1rem;">
            <div class="card-body">
              <img src=${item.imagen}>
              <h3 class="card-title">${item.nombre}</h3>
              <p class="card-text">${item.descripcion}</p>
              <p class="precio font-weight-bold">${item.precio}</p>
              <button class="btn btn-primary" onclick='agregarProductoCarrito({imagen:"${item.imagen}", id:"${item.id}", cantidad:"${item.cantidad}", nombre: "${item.nombre}", precio:"${item.precio}"})'>Agregar al
    carrito</button>
            </div>
          </div>
      `;
      }
    }
  };
}
