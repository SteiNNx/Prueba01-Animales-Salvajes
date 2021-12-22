import Animal from "./Animales.js";
import { setReproducirSonido } from '../utils.js';


/**
 * @class
 * @extends Animal
 * @exports
 */
export class Leon extends Animal {

    /**
     * @method rugir
     * @returns void
     */
    rugir() {
        setReproducirSonido(this.sonido());
    }

}

/**
 * @class
 * @extends Animal
 * @exports
 */
export class Lobo extends Animal {


    /**
     * @method aullar
     * @returns void
     */
    aullar() {
        setReproducirSonido(this.sonido());
    }

}

/**
 * @class
 * @extends Animal
 * @exports
 */
export class Oso extends Animal {

    /**
     * @method gruñir
     * @returns void
     */
    gruñir() {
        setReproducirSonido(this.sonido());
    }

}

/**
 * @class
 * @extends Animal
 * @exports 
 */
export class Serpiente extends Animal {

    /**
     * @method sisear
     * @returns void
     */
    sisear() {
        setReproducirSonido(this.sonido());
    }

}

/**
 * @class
 * @extends Animal
 * @exports 
 */
export class Aguila extends Animal {

    /**
     * @method chillar
     * @returns void
     */
    chillar() {
        setReproducirSonido(this.sonido());
    }

}