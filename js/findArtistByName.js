class findArtistByName{
    endpointUrl = "http://localhost:8080/get/artistByName"

    constructor() {

    }

    


     getArtistName(activeElement){
        let artistName = activeElement.split('\n')[0]

        
    }

    async getArtistByName(name) {
        let response = await fetch(this.endpointUrl);
        const data = await response.json();
        

    }

    

}


var GetAndFindArtist = new findArtistByName();