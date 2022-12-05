class Backstage {

    constructor() {
    }

    async getAllImages() {
        let response = await fetch('http://localhost:8080/get/allBackstageImages');
        let data = await response.json();

        const gallery = document.getElementById('backstageGrid');
        $(gallery).empty();


        let count = 0;

        data.forEach(element => {

            //Creating the grid
            let backstageGrid = document.createElement('div');
            backstageGrid.setAttribute('class', 'col-md-4 bg-dark gallery');

            let url = `${element.imageURL}`;
            backstageGrid.innerHTML = `<img class="img-thumbnail grid" src=${url} onclick="backstage.showImage('${url}')" data-bs-toggle="modal" data-bs-target="#popupImage" data-slide-to="${count++}">`;

            gallery.appendChild(backstageGrid);

        });


    }

    showImage(url) {
        let popup = document.getElementById('modalBody');
        alert("here");
        popup.innerHTML = `<br><br><br><br></br><img class="galleryPopup" src="${url}" alt="oops">`;
    }

}
let backstage = new Backstage();