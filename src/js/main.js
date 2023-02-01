import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Form from "./modules/form";
import ShowInfo from "./modules/showinfo";
import Download from "./modules/download";

window.addEventListener('DOMContentLoaded', () => {
    const mainPageSlider = new MainSlider({btns: '.next', container: '.page'});
    mainPageSlider.render();

    const modulePageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulePageSlider.render();

    const showupSlider = new MiniSlider({
        container: '.showup__content-slider', 
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    showupSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider', 
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider', 
        prev: '.feed__slider-container .slick-prev',
        next: '.feed__slider-container .slick-next',
        activeClass: 'feed__item-active',
    });
    feedSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();
    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Form('.form').init();
    new ShowInfo('.plus__content').init();
    new Download('.download').init();
});
