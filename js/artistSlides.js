let slideindex = 1;

//showSlides(slideindex)
//document.addEventListener("DOMContentLoaded", kaldShowslidesmed1);

function kaldShowslidesmed1() {
    showSlides(slideindex);
}


 //document.addEventListener("onDOMContentLoaded", showSlides(slideindex)) 
/*document.addEventListener("DOMContentLoaded", function showSlides(slideindex) {
    var eval_table = document.getElementsByClassName('artistSlides');
    console.log(eval_table, eval_table.length);
  });
  */

// next/previous controls
function plusSlides(n) {
    showSlides(slideindex += n);
}

//Thumbnail image controls
function currentSlide(n){
    showSlides(n)
}



function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('artistSlides');
    let dots = document.getElementsByClassName("demo");

    slideindex = n

    console.log(slides)
    console.log(slides.length)

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