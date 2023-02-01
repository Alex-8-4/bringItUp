export default class Slider {
    constructor({
            container = null,
            btns = null, 
            next = null, 
            prev = null,
            activeClass = 'active',
            animate,
            autoplay
        } = {}) {
        // деструктуризация объекта(из аргумента функции)
        this.container = document.querySelector(container);
        if (this.container) {
            this.slides = this.container.children;
        }
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}