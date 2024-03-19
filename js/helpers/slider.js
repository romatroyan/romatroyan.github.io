export const slider = ()=> {new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    
    loop: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    

    
})};