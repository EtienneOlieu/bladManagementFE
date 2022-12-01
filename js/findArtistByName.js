class findArtistByName{
    endpointUrl = "http://localhost:8080/get/artistByName"

    constructor() {

    }

     getArtistByName(activeElement){
        console.log(activeElement.split('\n')[0])





        let activeCarousel = document.getElementsByClassName("active")[0];
        console.log(activeCarousel);
        let testDiv = document.getElementsByClassName("carousel-caption")[0];
        console.log(testDiv);
        let testname = testDiv.textContent
        console.log(testname);




    }

}

var test = new findArtistByName();