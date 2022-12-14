class ArtistHandler{

    constructor(){}

    async createArtist(){
        const name = document.getElementById('artist-name').value;
        const description = document.getElementById('artist-description').value;
        const agent = document.getElementById('artist-agent').value;
        const image = document.getElementById('artist-image-url').value;
        const youtube = document.getElementById('artist-youtube-url').value;
        const facebook = document.getElementById('artist-facebook-url').value;
        const instagram = document.getElementById('artist-instagram-url').value;
        const spotify = document.getElementById('artist-spotify-url').value;
        const tiktok = document.getElementById('artist-tiktok-url').value;
    
        const artistObject = {
            'name' : name,
            'description': description,
            'agent': agent,
            'imageLink': image,
            'youtubeLink': youtube,
            'facebookLink':facebook,
            'instagramLink':instagram,
            'spotifyLink':spotify,
            'tiktokLink':tiktok
        };
    
        await fetch('http://localhost:8080/create/artist', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(artistObject)
        });
        alert("Artist created")
        artistModal.getAllArtists();
    }   
    
    async deleteArtist(id){

        const confirmDelete = confirm("Are you sure?");
        if (confirmDelete) {
            await fetch(`http://localhost:8080/delete/artist/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            alert("Artist deleted")
            artistModal.getAllArtists();
        }        
    }
    
    async updateArtist(artistObject){
        const objectasjson = JSON.stringify(artistObject);
        const confirmUpdate = confirm("Are you sure you want to update this artist?");
        if (confirmUpdate){
            await fetch(`http://localhost:8080/update/artist`,{
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: objectasjson
            });  
            alert("Artist updated")
            artistModal.getAllArtists();         
        }
        
    }
}
let artisthandler = new ArtistHandler();


