let index = 0;
let index2 = 0;
// Open Lightbox
function openLightbox(slideNumber) {
    var screenshot;
    console.log(slideNumber)
    if (slideNumber == 1) {
       screenshot = document.getElementById("Screenshot");
    } else if (slideNumber == 2) {
        screenshot = document.getElementById("Screenshot1");
    }
    const lightboxImg = document.getElementById("lightbox-img");

  
    lightboxImg.src = screenshot.src;
    lightbox.classList.add("active");
  }
  
  // Close Lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("active");
  }
  
  // Close Lightbox when clicking outside the image
  document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target === this) closeLightbox();
  });

function moveSlide(count) {
    index += count;
    switch (index) {
    case -1:
        moveSlide(4);
        break;
    case 0:
        document.getElementById("Screenshot").src = "Assets/File_Select.png"
        break;
    case 1:
        document.getElementById("Screenshot").src = "Assets/Main_Menu.png"
        break;
    case 2:
        document.getElementById("Screenshot").src = "Assets/Names.png"
        break;
    case 3:
        document.getElementById("Screenshot").src = "Assets/View.png"
        break;
    
    case 4:
        moveSlide(-4);
        break;
    }
}

