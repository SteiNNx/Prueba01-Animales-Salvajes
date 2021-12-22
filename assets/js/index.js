import {
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila,
} from './clases/TiposAnimales.js';
import {
    GET_URL_BY_LABEL,
} from './utils.js'

/**
 * Cargar Imagen al Seleccionar Animal en Select Options
 */
document.getElementById('animal')
    .addEventListener('change', (event) => {
        event.preventDefault();
        const { value } = event.target;

        /** Uso de Promesas */
        getImage(value)
            .then((resultImageUrl) => {
                const img = document.createElement("img");

                img.src = resultImageUrl;
                img.style.objectFit = '';
                img.style.height = '100%';
                img.style.width = '100%';

                /** Insercion Imagen */
                const previewElement = document.getElementById('preview');
                if (previewElement.firstChild) {
                    previewElement.removeChild(previewElement.firstChild);
                }
                previewElement.appendChild(img);
            });


    });

/**
 * @description función async/await para obtener las imágenes correspondientes a los animales
 * @param {string} valueNameImage 
 */
const getImage = async (valueNameImage) => {
    return await GET_URL_BY_LABEL[valueNameImage];
}

