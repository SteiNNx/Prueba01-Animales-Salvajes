import {
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila,
} from './clases/TiposAnimales.js';

import {
    LABEL_AGUILA,
    LABEL_LEON,
    LABEL_LOBO,
    LABEL_OSO,
    LABEL_SERPIENTE,
    IMAGE_URL,
    SOUND_URL,
} from './utils.js';

const validarFormulario = () => {
    let animal = document.getElementById("animal").value;
    let edad = document.getElementById("edad").value;
    let comentarios = document.getElementById("comentarios").value;
    if (
        animal === "Seleccione un animal" ||
        edad === "Seleccione un rango de años" ||
        comentarios === ""
    ) {
        alert("Rellenar todos los campos");
        return;
    }
};

const crearObjAnimal = (valueAnimal) => {
    let animal = document.getElementById("animal").value;
    let edad = document.getElementById("edad").value;
    let comentarios = document.getElementById("comentarios").value;

    let obj = null;

    switch (valueAnimal.name) {
        case LABEL_LEON:
            obj = new Leon(
                animal,
                edad,
                `./assets/imgs/${valueAnimal.imagen}`,
                comentarios,
                valueAnimal.sonido
            );
            break;
        case LABEL_LOBO:
            obj = new Lobo(
                animal,
                edad,
                `./assets/imgs/${valueAnimal.imagen}`,
                comentarios,
                valueAnimal.sonido
            );
            break;
        case LABEL_AGUILA:
            obj = new Aguila(
                animal,
                edad,
                `./assets/imgs/${valueAnimal.imagen}`,
                comentarios,
                valueAnimal.sonido
            );
            break;
        case LABEL_SERPIENTE:
            obj = new Serpiente(
                animal,
                edad,
                `./assets/imgs/${valueAnimal.imagen}`,
                comentarios,
                valueAnimal.sonido
            );
            break;
        case LABEL_OSO:
            obj = new Oso(
                animal,
                edad,
                `./assets/imgs/${valueAnimal.imagen}`,
                comentarios,
                valueAnimal.sonido
            );
            break;

        default:
            break;
    }
    return obj;
};

const obtenerDatos = async () => {
    const response = await fetch("./animales.json");

    const json = await response.json();
    return json.animales;
};
// // Función autoejecutante
(async () => {
    const data = await obtenerDatos();
    const arregloAnimales = [];

    let animal = null;

    /** Cargar Imagen */
    document.getElementById("animal").addEventListener("change", (event) => {
        event.preventDefault();
        const { value } = event.target;
        const previewElement = document.getElementById("preview");
        animal = data.find((valueIteracion) => valueIteracion.name === value);
        previewElement.style.backgroundImage = `url(./assets/imgs/${animal.imagen})`;
    });

    /** Agregar */
    document.getElementById("btnRegistrar").addEventListener("click", () => {
        // Validamos
        validarFormulario();

        // Crear instancia
        const objAnimal = crearObjAnimal(animal);
        arregloAnimales.push(objAnimal);
        generarCard(arregloAnimales);
    });
})();

const generarCard = (arregloAnimales) => {
    const divAnimales = document.getElementById("Animales");
    divAnimales.innerHTML = "";

    let cardString = "";
    arregloAnimales.forEach((element, index) => {
        cardString = `
      <div id="div-animal-${index}" class="card">
    <img src="${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
       <a id="btn-sound-${index}" href="#" class="btn btn-primary d-flex">${element.nombre}</a>
    </div>
  </div>
      `;

        const div = document.createElement("div");
        div.innerHTML = cardString;
        divAnimales.appendChild(div);

        addEventSoundCard(element, index);
        addEventOpenModal(element, index);
    });
};

const addEventSoundCard = (element, index) => {
    document.getElementById(`btn-sound-${index}`).addEventListener('click', () => {
        switch (element.nombre) {
            case LABEL_AGUILA:
                element.chillar();
                break;
            case LABEL_LEON:
                element.rugir();
                break;
            case LABEL_LOBO:
                element.aullar();
                break;
            case LABEL_OSO:
                element.gruñir();
                break;
            case LABEL_SERPIENTE:
                element.sisear();
                break;
        }
    })
};

