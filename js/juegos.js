document.addEventListener("DOMContentLoaded", () => {
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel[0], {
        duration: 150,
        dist: 0,
        shift: 5,
        padding: 40,
        numVisible: 5,
        // indicators: true,
        noWrap: false
    });

    M.Carousel.init(elementosCarousel[1], {
        duration: 150,
        dist: -50,
        shift: 5,
        padding: 40,
        numVisible: 9,
        // indicators: true,
        noWrap: false
    });

    M.Carousel.init(elementosCarousel[2], {
        duration: 150,
        dist: 0,
        shift: 5,
        padding: 100,
        numVisible: 5,
        // indicators: true,
        noWrap: false
    });

    M.Carousel.init(elementosCarousel[3], {
        duration: 150,
        dist: 0,
        shift: 5,
        padding: 100,
        numVisible: 5,
        // indicators: true,
        noWrap: false
    });
});