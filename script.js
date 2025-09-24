document.getElementById("copy-button").addEventListener("click", function () {
    const text = document.getElementById("bibtex-text").innerText;
    navigator.clipboard.writeText(text).then(() => {
        // Optional: Give feedback
        alert("BibTeX copied to clipboard!");
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

(function () {
    const bar = document.getElementById('progressbar');
    if (!bar) return;

    let raf = null;

    function update() {
        const doc = document.documentElement;
        const body = document.body;

        const scrollTop = doc.scrollTop || body.scrollTop || 0;
        const max = (doc.scrollHeight || body.scrollHeight) - doc.clientHeight;

        const progress = max > 0 ? scrollTop / max : 0; // 0 → top, 1 → bottom
        const remaining = 1 - progress;                 // gray cover left to show
        bar.style.width = (remaining * 100) + '%';
    }

    function onScroll() {
        if (raf) return;
        raf = requestAnimationFrame(() => {
            raf = null;
            update();
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update(); // set initial state
})();