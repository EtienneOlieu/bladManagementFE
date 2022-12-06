let slideindex = 1;
showSlides(slideindex);

// next/previous controls
function plusSlides(n) {
    showSlides(slideindex += n);
}

//Thumbnail image controls
function currentSlide(n){
    showSlides(slideindex = n)
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("artistSlides");
    let dots = document.getElementsByClassName("demo");
    if (n>slides.length){
        slideindex = 1
    }
    if (n<1){
        slideindex = slides.length
    }
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideindex-1].style.display = "block";
    dots[slideindex-1].className += " active";
}