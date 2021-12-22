/**
 * @class Animal
 * @exports
 * @default
 */
export default class Animal {

    /**
     * @constructor Animal
     * @param {string} nombre 
     * @param {number} edad 
     * @param {string} img 
     * @param {string} comentarios 
     * @param {string} sonido 
     */
    constructor(nombre, edad, img, comentarios, sonido) {
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        /**
         * @returns {string}
         */
        this.getNombre = () => _nombre;

        /**
         * @returns {number}
         */
        this.getEdad = () => _edad;

        /**
         * @returns {string}
         */
        this.getImg = () => _img;

        /**
         * @returns {string}
         */
        this.getComentarios = () => _comentarios;

        /**
         * @returns {string}
         */
        this.getSonido = () => _sonido;

        /**
         * @param {string} newNombre 
         */
        this.setNombre = (newNombre) => _nombre = newNombre;

        /**
         * @param {number} newEdad 
         */
        this.setEdad = (newEdad) => _edad = newEdad;

        /**
         * @param {string} newImg 
         */
        this.setImg = (newImg) => _img = newImg;

        /**
         * @param {string} newComentarios 
         */
        this.setComentarios = (newComentarios) => _comentarios = newComentarios;

        /**
         * @param {string} newSonido 
         */
        this.setSonido = (newSonido) => _sonido = newSonido;
    }

    /**
     * Getters
     */
    get nombre() {
        return this.getNombre();
    }

    get edad() {
        return this.getEdad();
    }

    get img() {
        return this.getImg();
    }

    get comentarios() {
        return this.getComentarios();
    }

    get sonido() {
        return this.getSonido();
    }

    /**
     * Setters
     */
    set nombre(newNombre) {
        this.setNombre(newNombre)
    }

    set edad(newEdad) {
        this.setEdad(newEdad);
    }

    set img(newImg) {
        this.setImg(newImg);
    }

    set comentarios(newComentarios) {
        this.setComentarios(newComentarios);
    }

    set sonido(newSonido) {
        this.setSonido(newSonido);
    }

}
