let artistData;

class TemplateHandler {

    endpointURL = "http://localhost:8080/get/artistList";

    constructor() {

    }

    async artistSlideShow() {
        let response = await fetch(this.endpointURL);
        artistData = await response.json();

        for (const artistIndex in artistData) {

            let artistTemplate = document.querySelector('#artistSlideshow')
            let artistClone = artistTemplate.content.cloneNode(true)
            
            let artistDescriptionRoot = artistClone.querySelector(".artistDescription")
            let iFrameRoot = artistClone.querySelector("iframe")

            let agentRoot = artistClone.querySelector('#agentInfo')
            let facebookRoot = artistClone.querySelector('#facebookLink')
            let instagramRoot = artistClone.querySelector('#instagramLink')
            let tikTokRoot = artistClone.querySelector('#tikTokLink')
            let spotifyRoot = artistClone.querySelector('#spotifyLink')
            artistDescriptionRoot.textContent = artistData[artistIndex].description
            iFrameRoot.setAttribute("src",artistData[artistIndex].youtubeLink)
            agentRoot.textContent = artistData[artistIndex].agent
            if(artistData[artistIndex].facebookLink != null){
                facebookRoot.setAttribute("href",artistData[artistIndex].facebookLink)
            }
            if(artistData[artistIndex].instagramLink != null){
                
                instagramRoot.setAttribute("href",artistData[artistIndex].instagramLink)
            }
            if(artistData[artistIndex].tikTokLink != null){
               
                tikTokRoot.setAttribute("href",artistData[artistIndex].tikTokLink)
            }
            if(artistData[artistIndex].spotifyLink != null){
                
                spotifyRoot.setAttribute("href",artistData[artistIndex].spotifyLink)
            }

            //numberTextRoot.textContent = currentNumberText
            artistClone.querySelector(".artistSlides").setAttribute("style", "background-image:url('" + artistData[artistIndex].imageLink + "')")
            

            let thumbnailTemplate = document.querySelector('#artistSlideThumbnail')
            let thumbnailClone = thumbnailTemplate.content.cloneNode(true)
            let imageRoot = thumbnailClone.querySelector("img")

            imageRoot.setAttribute("src", artistData[artistIndex].imageLink)
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