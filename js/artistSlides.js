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

function textOverImage(){
    console.log("test2")
    var textOverImages=document.querySelectorAll(".artistSlides div")
    console.log(textOverImages)
    for(var i=0; i<textOverImages.length; i++){
        textOverImages[i].onclick = function (){
            this.classList.toggle("show");
        }
    }
    // var backgroundToFade = document.querySelectorAll(".artistSlides")
    // for(var i=0; i<backgroundToFade.length; i++){
    //     backgroundToFade[i].onclick = function (){
    //         this.classList.toggle("show");
    //     }
    // }

}

