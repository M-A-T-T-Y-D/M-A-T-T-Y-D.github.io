// Open Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = imageSrc;
    lightbox.classList.add("active");
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
}

// Close Lightbox when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target === this) closeLightbox();
});