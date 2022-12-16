class ArtistModal {

    artists = [];
    currentArtist;

    constructor() {
    }

    async getAllArtists() {
        let response = await fetch('http://localhost:8080/get/artistList');
        this.currentArtist = 0;
        this.artists = await response.json();
        this.artists.sort(function (a, b) {
            return a.id - b.id;
        });
        console.log(this.artists);
    }

    // Buttons right
    showButtons() {

        this.getAllArtists();

        // Context relevant title and list of buttons
        const optionsTitle = document.getElementById('optionsTitle');
        optionsTitle.innerHTML = `Artist options`;
        const optionButtons = document.getElementById('optionButtons');
        optionButtons.innerHTML = `
        <button class="btn btn-dark" onclick="artistModal.showModal('Create')" data-bs-toggle="modal" data-bs-target="#popupAdmin">Create</button><br><br>
        <button class="btn btn-dark" onclick="artistModal.showModal('Delete')" data-bs-toggle="modal" data-bs-target="#popupAdmin">Delete</button><br><br>
        <button class="btn btn-dark" onclick="artistModal.showModal('Update')" data-bs-toggle="modal" data-bs-target="#popupAdmin">Update</button><br><br></br>`
    }


    showModal(option) {

        const modalHeader = document.getElementsByClassName('modal-header');
        const modalBody = document.getElementById('modalBodyAdmin');
        const modalFooter = document.getElementsByClassName('modal-footer');

        switch (option) {
            case "Create": {
                modalHeader[0].innerHTML = `<h2>Create new artist...</h2><button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`
                modalBody.innerHTML = `<div class="eventOptions" id="edit-events">
                <form id="form-artists" action="javascript:artisthandler.createArtist()">                
                    <input type="text" id="artist-name" placeholder="name"><br>
                    <textarea type="text" id="artist-description" rows="5" cols="50" placeholder="description"></textarea><br>
                    <input type="text" id="artist-agent" placeholder="agent"><br>
                    <input type="text" id="artist-image-url" placeholder="image link"><br>
                    <input type="text" id="artist-youtube-url" placeholder="Youtube link"><br>
                    <input type="text" id="artist-facebook-url" placeholder="Facebook link"><br>
                    <input type="text" id="artist-instagram-url" placeholder="Instagram link"><br>
                    <input type="text" id="artist-spotify-url" placeholder="Spotify link"><br>
                    <input type="text" id="artist-tiktok-url" placeholder="TikTok link"><br>
                    <button class="btn btn-success" type="submit" data-bs-dismiss="modal" aria-label="Close">Submit artist</button>
                </form>        
                </div>`;
                break;
            }
            case "Delete": {
                modalHeader[0].innerHTML = `<h2>Delete artist...</h2><button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`

                modalBody.innerHTML = `
                <h2>${this.artists[this.currentArtist].name}</h2>
                <img src = "${this.artists[this.currentArtist].imageLink}" class="adminModalEventImage"><br>
                <button class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onclick="artisthandler.deleteArtist(${this.artists[this.currentArtist].id})">Delete</button>
                `;

                modalFooter[0].innerHTML = `
                <button class="btn btn-dark" onclick="artistModal.decrementCount()"><</button>
                <button class="btn btn-dark" onclick="artistModal.incrementCount()">></button>`;
                break;
            }
            case "Update": {
                modalHeader[0].innerHTML = `<h2>Update artist...</h2><button class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`

                modalBody.innerHTML = `
                <h2>${this.artists[this.currentArtist].name}</h2>
                <img src = "${this.artists[this.currentArtist].imageLink}" class="adminModalEventImage"><br>
                <button class="btn btn-dark" onclick="artistModal.updateArtist()" data-bs-toggle="modal" data-bs-target="#popupUpdate">Update</button>`;

                modalFooter[0].innerHTML = `
                <button class="btn btn-dark" onclick="artistModal.decrementUpdate()"><</button>
                <button class="btn btn-dark" onclick="artistModal.incrementUpdate()">></button>`;
                break;
            }
            default: {
            }
        }
    }

    incrementCount() {
        this.currentArtist++;
        if (this.currentArtist > this.artists.length - 1) {
            this.currentArtist = 0;
        }
        document.getElementById('modalBodyAdmin').innerHTML = `
        <h2>${this.artists[this.currentArtist].name}</h2>
        <img src = "${this.artists[this.currentArtist].imageLink}" class="adminModalEventImage"><br>
        <button class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onclick="artisthandler.deleteArtist(${this.artists[this.currentArtist].id})">Delete</button>
        `;
    }

    decrementCount() {
        this.currentArtist--;
        if (this.currentArtist < 0) {
            this.currentArtist = this.artists.length - 1;
        }
        document.getElementById('modalBodyAdmin').innerHTML = `
        <h2>${this.artists[this.currentArtist].name}</h2>
        <img src = "${this.artists[this.currentArtist].imageLink}" class="adminModalEventImage"><br>
        <button class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onclick="artisthandler.deleteArtist(${this.artists[this.currentArtist].id})">Delete</button>
        `;
    }

    updateArtist() {

        document.getElementById('modalHeaderAdminUpdate').innerHTML = `<h3>Make  desired changes and click 'Update artist'</h3><button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`

        document.getElementById('modalBodyAdminUpdate').innerHTML = `
        <form id="form-artists">                
            <input type="text" id="artist-name" placeholder="name"><br>
            ${this.artists[this.currentArtist].name}<br>
            <textarea type="text" id="artist-description" rows="5" cols="50" placeholder="description"></textarea><br>
            ${this.artists[this.currentArtist].description}<br>
            <input type="text" id="artist-agent" placeholder="agent"><br>
            ${this.artists[this.currentArtist].agent}<br>
            <input type="text" id="artist-image-url" placeholder="image link"><br>
            ${this.artists[this.currentArtist].imageLink}<br>
            <input type="text" id="artist-youtube-url" placeholder="Youtube link"><br>
            ${this.artists[this.currentArtist].youtubeLink}<br>
            <input type="text" id="artist-facebook-url" placeholder="Facebook link"><br>
            ${this.artists[this.currentArtist].facebookLink}<br>
            <input type="text" id="artist-instagram-url" placeholder="Instagram link"><br>
            ${this.artists[this.currentArtist].instagramLink}<br>
            <input type="text" id="artist-spotify-url" placeholder="Spotify link"><br>
            ${this.artists[this.currentArtist].spotifyLink}<br>
            <input type="text" id="artist-tiktok-url" placeholder="TikTok link"><br>
            ${this.artists[this.currentArtist].tiktokLink}<br>
            <button class="btn btn-success" type="submit" onclick="artistModal.createArtistObject(${this.artists[this.currentArtist].id})" data-bs-dismiss="modal" aria-label="Close">Update event</button>
        </form>`
    }

    incrementUpdate() {
        this.currentArtist++;
        if (this.currentArtist > this.artists.length - 1) {
            this.currentArtist = 0;
        }
        document.getElementById('modalBodyAdmin').innerHTML = `
        <h2>${this.artists[this.currentArtist].name}</h2>
        <img src = "${this.artists[this.currentArtist].imageLink}" class="adminModalEventImage"><br>
        <button class="btn btn-dark" onclick="artistModal.updateArtist()" data-bs-toggle="modal" data-bs-target="#popupUpdate">Update</button>`;
    }

    decrementUpdate() {
        this.currentArtist--;
        if (this.currentArtist < 0) {
            this.currentArtist = this.artists.length - 1;
        }
        document.getElementById('modalBodyAdmin').innerHTML = `
        <h2>${this.artists[this.currentArtist].name}</h2>
        <img src = "${this.artists[this.currentArtist].imageLink}" class="adminModalEventImage"><br>
        <button class="btn btn-dark" onclick="artistModal.updateArtist()" data-bs-toggle="modal" data-bs-target="#popupUpdate">Update</button>`;
    }

    createArtistObject(ident) {

        const name = document.querySelector('#artist-name').value;
        const description = document.querySelector('#artist-description').value;
        const agent = document.querySelector('#artist-agent').value;
        const image = document.querySelector('#artist-image-url').value;
        const youtube = document.querySelector('#artist-youtube-url').value;
        const facebook = document.querySelector('#artist-facebook-url').value;
        const instagram = document.querySelector('#artist-instagram-url').value;
        const spotify = document.querySelector('#artist-spotify-url').value;
        const tiktok = document.querySelector('#artist-tiktok-url').value;
        const objectToSend = {
            'id': ident,
            'name': name,
            'description': description,
            'agent': agent,
            'imageLink': image,
            'youtubeLink': youtube,
            'facebookLink': facebook,
            'instagramLink': instagram,
            'spotifyLink': spotify,
            'tikTokLink': tiktok
            };
            console.log(objectToSend);
        artisthandler.updateArtist(objectToSend);        
    }
}

const artistModal = new ArtistModal();