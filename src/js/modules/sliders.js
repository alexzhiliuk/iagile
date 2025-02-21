import Swiper, {Autoplay, Navigation, Pagination, Manipulation} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Manipulation]);

const swiperAdvantages = new Swiper('#advantagesSlider', {    
    slidesPerView: 1,
    spaceBetween: 8,
    
    breakpoints: {
        576: {
            slidesPerView: 2,
        }
    },

    navigation: {
        prevEl: "#advantagesSliderPrev",
        nextEl: "#advantagesSliderNext"
    },

});

const swiperCases = new Swiper('#casesSlider', {    
    slidesPerView: 1,
    spaceBetween: 8,

    navigation: {
        prevEl: "#casesSliderPrev",
        nextEl: "#casesSliderNext"
    },

});


const swiperAutomation = new Swiper('#automationSlider', {    
    slidesPerView: 1,
    spaceBetween: 8,

    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        }
    },

    navigation: {
        prevEl: "#automationSliderPrev",
        nextEl: "#automationSliderNext"
    },

});
