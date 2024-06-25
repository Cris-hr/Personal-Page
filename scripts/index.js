const repository = new Repository();
const handleDelete = (id) => {
  repository.deleteActivity(id);
  convertElementForm();
};
// *HOMEWORK 3
//*Actividad 2
// 1.implementar una funcion que recibe por parametro un objeto instancia de Activity
function elementAdd({ id, title, description, imgURL }) {
  // 3.creamos elementos HTML que formaran parte de la tarjeta
  const titulos = document.createElement("h3");
  const describiendo = document.createElement("p");
  const laImagen = document.createElement("img");
  // 6.crear un elemento div que contendra a los demas elementos
  const contTarjetas = document.createElement("div");

  //4.asignamos los valores a cada elemento
  titulos.innerHTML = title;
  describiendo.innerHTML = description;
  laImagen.src = imgURL;
  console.log(laImagen.src);

  const cardButton = document.createElement("button");
  cardButton.innerText = "X";
  cardButton.addEventListener("click", () => handleDelete(id));

  // 5.agregamos las clases CSS a cada elemento
  titulos.classList.add("tituloTarjeta");
  describiendo.classList.add("descriptionTarjeta");
  laImagen.classList.add("imageTarjeta");
  // 8.asignamos al div la clase CSS para darle estilos
  contTarjetas.classList.add("contTarjetas");

  // 7.appendeamos al div los elementos creados
  contTarjetas.appendChild(cardButton);
  contTarjetas.appendChild(titulos);
  contTarjetas.appendChild(describiendo);
  contTarjetas.appendChild(laImagen);
  //console.log(contTarjetas)

  //otra forma de apendear en una sola linea
  //contTarjetas.append(titulos,describiendo,laImagen)

  // 9.retornamos el div finalizado con sus elementos dentro
  return contTarjetas;
}

//Actividad 3
//implementar una funcion que convierta instancias de Activity en elementos HTML para agregarlos al contenedor
function convertElementForm() {
  // 1.seleccionamos el contenedor donde agregaremos las actividades
  const contentCards = document.getElementById("contentCards");

  // 2.vaciar el contenido actual del contenedor
  contentCards.innerHTML = "";

  // 3.Obtener el listado completo de actividades mediante el método de la instancia de Repository.
  const actividadAll = repository.getAllActivities();
  //console.log(actividadAll)

  // 4.Mapear el listado de actividades para convertirlos todos en elementos HTML pasando como callback la función
  //anterior "elementForm" y lo guardamos en una nueva variable "listActivities"
  const listActivities = actividadAll.map((activity) => elementAdd(activity));

  // 5.Appendeamos todos los elementos HTML del nuevo array dentro del contenedor,usamos el metodo forEach
  listActivities.forEach((element) => contentCards.appendChild(element));
  //console.log(containerCards);
}
convertElementForm();

//Actividad 4
//Implementar la función handler que se ejecutará al disparar el evento del botón
function handler(e) {
  e.preventDefault();

  // 1.seleccionamos los inputs del titulo, descripcion y la imagen
  // 2.Tomar los valores ingresados en los inputs y guardarlos en variables.
  const inputTitulo = document.getElementById("titulo").value;
  const inputDescripcion = document.getElementById("descripcion").value;
  const inputImagen = document.getElementById("imgs").value;
  const formInfo = document.getElementById("formInfo");

  // 3.Validar que estos valores estén completos. De lo contrario deberá cortar el proceso y mostrar un mensaje de aviso
  if (
    inputTitulo.trim() === "" ||
    inputDescripcion.trim() === "" ||
    inputImagen.trim() === ""
  ) {
    // Mostrar mensaje de advertencia
    alert("¡Hay datos incompletos! Por favor, complete todos los campos.");
    // Detener el proceso
    return;
  }
  // 4.Llamar al método correspondiente de la instancia de Repository para crear una nueva actividad.
  repository.createActivity(inputTitulo, inputDescripcion, inputImagen);
  // 5.Invocar la función que implementamos en el punto anterior para “refrescar” el contenedor de actividades.
  convertElementForm();
  //resetea el formulario
  formInfo.reset();
}

//Actividad 5
// 1.seleccionar el boton
const button = document.getElementById("button");
//agregar un Event Listener. Evento que mal dispararse, ejecuta la función "handler",que creamos en el punto anterior
button.addEventListener("click", handler);
