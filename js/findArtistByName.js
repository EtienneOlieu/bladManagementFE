class findArtistByName{
    endpointUrl = "http://localhost:8080/get/artistByName"

    constructor() {

    }

    
    /* måske redundant */
    async getArtistByName(name) {
        let response = await fetch(this.endpointUrl + "?artistName=" + name);
        const data = await response.json();
        

    }

    

}


var GetAndFindArtist = new findArtistByName();