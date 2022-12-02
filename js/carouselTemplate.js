    let data;

class TemplateHandler {
    
    endpointURL = "http://localhost:8080/get/artistList";

    constructor(){

    }

    getArtistName(activeElement){
        let artistName = activeElement.split('\n')[0]
        /* 
        Skal kaldes hver gang der trykkes på et billede
        Clear innerHTML i den div som kunstneren skal appendes til
        finder artisten baseret på navnet
        */


        let realArtist;
        for (const artistIndex in data) {
                if(data[artistIndex].name == artistName)
                realArtist = data[artistIndex];
            }


            const container = document.getElementById('divToBeClearedAndAppended');
            container.replaceChildren();

            let template = document.querySelector('#artistExpanded')
            let clone = template.content.cloneNode(true)
            let nameRoot = clone.querySelector('#artistName')
            let descriptionRoot = clone.querySelector('#description')
            let agentRoot = clone.querySelector('#agentInfo')
            let iFrameRoot = clone.querySelector("iframe")
            let facebookRoot = clone.querySelector('#facebookLink')
            let instaRoot = clone.querySelector('#instagramLink')
            let spotifyRoot = clone.querySelector('#spotifyLink')

            nameRoot.textContent = realArtist.name;
            descriptionRoot.textContent = realArtist.description
            agentRoot.textContent = realArtist.agent
            iFrameRoot.setAttribute("src", realArtist.youtubeLink)
            facebookRoot.setAttribute("href", realArtist.facebookLink)
            instaRoot.setAttribute("href", realArtist.instagramLink)
            spotifyRoot.setAttribute("href", realArtist.spotifyLink)
            let target = document.querySelector('#divToBeClearedAndAppended')
            target.appendChild(clone)

                
        }
    


    async loadFromDocument() {
        
        let response = await fetch(this.endpointURL);
        data = await response.json();
        let counter = 0;
        for (const artistIndex in data) {
            counter += 1;
            

            let template = document.querySelector('#carouselContent')
            let clone = template.content.cloneNode(true)
            let itemRoot = clone.querySelector('#isItemActive')
            let imageRoot = clone.querySelector("img")
            let artistNameRoot = clone.querySelector('#thisArtistName')
           
            if(counter==1){
                itemRoot.setAttribute("class", "carousel-item active")
            }

            imageRoot.setAttribute("src", data[artistIndex].imageLink)
            imageRoot.setAttribute("class", "d-block w-100 thisImage ")
            imageRoot.setAttribute("data-bs-toggle", "collapse")
            imageRoot.setAttribute("href", "#collapseArtist")
            imageRoot.setAttribute("role", "button")
            
            artistNameRoot.textContent = data[artistIndex].name
            let target = document.querySelector('#targetId')
            target.appendChild(clone)
            }
        }
    }

    var carouselClass = new TemplateHandler()
