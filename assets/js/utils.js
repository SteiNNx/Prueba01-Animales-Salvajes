/** Animal Label */
export const LABEL_AGUILA = 'Aguila';
export const LABEL_LEON = 'Leon';
export const LABEL_LOBO = 'Lobo';
export const LABEL_OSO = 'Oso';
export const LABEL_SERPIENTE = 'Serpiente';

/** Image Urls */
export const IMAGE_URL = animal => `./assets/imgs/${animal}`;

/** Sound Urls */
export const SOUND_URL = sonido => `./assets/sounds/${sonido}`;


/** Funcion IIFE */
export const setReproducirSonido = (() => {
    const reproducirSonido = (sonido) => {
        let player = document.getElementById("player");
        const rutaObjeto = `./assets/sounds/${sonido}`;
        player.setAttribute("src", rutaObjeto);
        player.play();
    }
    return {
        responseReproducirSonido: reproducirSonido,
    }
})();