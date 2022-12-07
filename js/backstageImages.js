
    let selectedUrl = null;
    let data = null;
    
    async function getAllImages(){
        let response = await fetch('http://localhost:8080/get/allBackstageImages');
        data = await response.json();

        const gallery = document.getElementById('backstageGrid');
        $(gallery).empty();
        
        for (let i in data) {
            let backstageGrid = document.createElement('div');
            backstageGrid.setAttribute('class', 'col-md-4 gallery');

            let url = `${data[i].imageURL}`;
            backstageGrid.innerHTML = `<img class="img-thumbnail grid" src=${url} onclick="showImage('${url}')"><br><br>`;
            gallery.appendChild(backstageGrid);
        }
    }

    function showImage(url) {
        let popup = document.getElementById('modalBody');
        popup.innerHTML = `<img class="galleryPopup" src="${url}" alt="oops">`;
        selectedUrl = url;
    }

    function searchUrlInData(){
        let match = -1;
        for (let i = 0; i < data.length; i++){
            if (data[i].imageURL === selectedUrl){
                match = i;
            }            
        }
        return match;
    }

    function incrementCount(){
        let i = searchUrlInData();
        i++;
        if (i > data.length-1){
            i = 0;
        }
            let popup = document.getElementById('modalBody');
            let url = `${data[i].imageURL}`;
        popup.innerHTML = `<img class="galleryPopup" src="${url}" alt="oops">`;
        selectedUrl = url;
        
    }

    function decrementCount(){
        let i = searchUrlInData();
        i--;
        if (i < 0){
            i = data.length-1;
        }
            let popup = document.getElementById('modalBody');
            let url = `${data[i].imageURL}`;
        popup.innerHTML = `<img class="galleryPopup" src="${url}" alt="oops">`;
        selectedUrl = url;
    }

