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
            
            let artistDescriptionRoot = artistClone.querySelector(".artistDescription")
            let iFrameRoot = artistClone.querySelector("iframe")

            let agentRoot = artistClone.querySelector('#agentInfo')
            let facebookRoot = artistClone.querySelector('#facebookLink')
            let instagramRoot = artistClone.querySelector('#instagramLink')
            let tikTokRoot = artistClone.querySelector('#tikTokLink')
            let spotifyRoot = artistClone.querySelector('#spotifyLink')
            artistDescriptionRoot.textContent = data[artistIndex].description
            iFrameRoot.setAttribute("src",data[artistIndex].youtubeLink)
            agentRoot.textContent = data[artistIndex].agent
            if(data[artistIndex].facebookLink != null){
                facebookRoot.setAttribute("href",data[artistIndex].facebookLink)
            }
            if(data[artistIndex].instagramLink != null){
                
                instagramRoot.setAttribute("href",data[artistIndex].instagramLink)
            }
            if(data[artistIndex].tikTokLink != null){
               
                tikTokRoot.setAttribute("href",data[artistIndex].tikTokLink)
            }
            if(data[artistIndex].spotifyLink != null){
                
                spotifyRoot.setAttribute("href",data[artistIndex].spotifyLink)
            }

            //numberTextRoot.textContent = currentNumberText
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
        textOverImage()
    }

}

var artistSlideBuilder = new TemplateHandler()