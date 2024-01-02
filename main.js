document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll(".img");
    const option = {
        rootMargin: '10px',
        threshold: 0.5
    }
    function lazyLoad(target) {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    const img = e.target;
                    const src = img.getAttribute('data-src');
                    img.classList.add("img-loaded");

                    img.src = src;
                    observer.unobserve(img);
                }
            });
        }, option);

        target.forEach((img) => {
            io.observe(img)
        });        
    }
    lazyLoad(imgs);
})

