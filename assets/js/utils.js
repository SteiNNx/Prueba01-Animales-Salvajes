/** Animal Label */
export const LABEL_AGUILA = 'Aguila';
export const LABEL_LEON = 'Leon';
export const LABEL_LOBO = 'Lobo';
export const LABEL_OSO = 'Oso';
export const LABEL_SERPIENTE = 'Serpiente';

/** Image Urls */
export const IMAGE_URL_AGUILA = './assets/imgs/Aguila.png';
export const IMAGE_URL_LEON = './assets/imgs/Leon.png';
export const IMAGE_URL_LOBO = './assets/imgs/Lobo.jpg';
export const IMAGE_URL_OSO = './assets/imgs/Oso.jpg';
export const IMAGE_URL_SERPIENTE = './assets/imgs/Serpiente.jpg';

export const GET_URL_BY_LABEL = {
    [LABEL_AGUILA]: IMAGE_URL_AGUILA,
    [LABEL_LEON]: IMAGE_URL_LEON,
    [LABEL_LOBO]: IMAGE_URL_LOBO,
    [LABEL_OSO]: IMAGE_URL_OSO,
    [LABEL_SERPIENTE]: IMAGE_URL_SERPIENTE,

};

/** Funcion IIFE */
export const setReproducirSonido = (() => {
    const reproducirSonido = (sonido) => {
        let player = document.getElementById("player");
        const rutaObjeto = `../../sounds/${sonido}`;
        player.setAttribute("src", rutaObjeto);
        player.play();
    }
    return {
        responseReproducirSonido: reproducirSonido,
    }
})();