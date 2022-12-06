
    let selectedUrl = null;
    let data = [];
    
    async function getAllImages(){
        let response = await fetch('http://localhost:8080/get/allBackstageImages');
        data = await response.json();

        const gallery = document.getElementById('backstageGrid');
        $(gallery).empty();
        
        for (let i in data) {
            let backstageGrid = document.createElement('div');
            backstageGrid.setAttribute('class', 'col-md-4 gallery');

            let url = `${data[i].imageURL}`;
            backstageGrid.innerHTML = `<img class="img-thumbnail grid" src=${url} onclick="showImage(${url})" data-bs-toggle="modal" data-bs-target="#popupImage"><br><br>`;
            gallery.appendChild(backstageGrid);
        }
    }

    function showImage(url) {
        let popup = document.getElementById('modalBody');
        popup.innerHTML = `<br><br><br><br><br><img class="galleryPopup" src="${url}" alt="oops">`;
        selectedUrl = url;
    }

    function searchUrlInData(url){
        for (let i = 0; i < data.length; i++){
            if (data[i].imageURL.match(url)){
                return i;
            }
            return 0;
        }
    }

    function incrementCount(){
        let i = searchUrlInData(selectedUrl);
        i++;
        if (i > data.length){
            i = 0;
            showImage(data[i].imageURL);
        }
    }

    function decrementCount(){

    }

