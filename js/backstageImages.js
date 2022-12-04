class Backstage{

    constructor(){
        this.url = 'http://localhost:8080'
    }


    async getAllImages(){
        let response = await fetch(`${this.url}/get/allBackstageImages`);
        let data = await response.json();
        
        this.data.forEach(element => {
            
            const div = document.getElementById('backstageGrid');
            let imgURL = data.imgURL;

            //Creating the grid
            let backstageGrid = document.createElement('div');
            backstageGrid.setAttribute('src', 'col-md-4 bg-dark');
            backstageGrid.innerHTML = `
                <img class="rounded mx-auto d-block" src="${data.imgURL}"
            `;  

            div.appendChild(backstageGrid);
        });
    }

}