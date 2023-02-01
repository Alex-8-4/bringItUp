import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(options) {
        super(options);
    }

    showSlides(n) {
        // переключаемся на первый слайд при достижении конца
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }
        
        // на третьем слайде всплывающий блок, чтобы не ломалcя скрипт, 
        // если этого блока нет в слайдере(напр. на странице /modules.html), оборачиваем в try catch
        try {
            this.hanson.style.opacity = '0';

            if (n === 3) {
                this.hanson.classList.add('animated');

                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 400);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch(err) {
            console.log(err);
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.plusSlides(1);
            });
        });

        document.querySelectorAll('.prevmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.plusSlides(-1);
            });
        });

        document.querySelectorAll('.nextmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.plusSlides(1);
            });
        });
    }    

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
                this.hanson.style.opacity = '0';
            } catch (err) {
                console.log(err);
            }    
            
            this.bindTriggers();
            this.showSlides(this.slideIndex);
        } 
    }
}