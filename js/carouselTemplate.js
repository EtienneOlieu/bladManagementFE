class TemplateHandler {

    endpointURL = "http://localhost:8080/get/artistList";

    constructor(){

    }

    async loadFromDocument() {
        
        let response = await fetch(this.endpointURL);
        const data = await response.json();
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
