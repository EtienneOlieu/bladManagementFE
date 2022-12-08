let data;

class TemplateHandler {

    endpointURL = "http://localhost:8080/get/artistList";

    constructor() {

    }

    async artistSlideShow() {
        let response = await fetch(this.endpointURL);
        data = await response.json();

        for (const artistIndex in data) {

            let artistTemplate = document.querySelector('#artistSlideshow')
            let artistClone = artistTemplate.content.cloneNode(true)
            let numberTextRoot = artistClone.querySelector('#thisNumberText')
            let imageDivRoot = artistClone.querySelector('#divWithImage')
            let currentNumberText = artistIndex + 1 + "/" + artistIndex.length + 1
            
            numberTextRoot.textContent = currentNumberText
            artistClone.querySelector(".artistSlides").setAttribute("style", "background-image:url('" + data[artistIndex].imageLink + "')")
            

            let thumbnailTemplate = document.querySelector('#artistSlideThumbnail')
            let thumbnailClone = thumbnailTemplate.content.cloneNode(true)
            let imageRoot = thumbnailClone.querySelector("img")

            imageRoot.setAttribute("src", data[artistIndex].imageLink)
            let number = artistIndex
            number++
            imageRoot.setAttribute("onclick", "currentSlide(" + number + ")")

            let targetArtist = document.querySelector('#artistTarget')
            targetArtist.appendChild(artistClone)
            let targetThumbnail = document.querySelector('#thumbnailTarget')
            targetThumbnail.appendChild(thumbnailClone)

        }

        showSlides(slideindex)
    }

}

var artistSlideBuilder = new TemplateHandler()