class ConcertModal {

    constructor() {
    }
    
    showModal(t) { 

        const modal = document.getElementById('modalBodyAdmin');
        modal.innerHTML  = `"${t}"`;

        /* let count = {}

        this.data.forEach(function(item) {
            var colour = item.colour
            count[colour] = (count[colour] || 0) +1
        });

        for (let index in count) {           
            let tableRow = `<tr style="vertical-align:middle;">
            <td>${index}</td>
            <td>${count[index]}</td>
            </tr>;`
            $('#pin-data').append(tableRow);
        }    */      
    }  
} 
var concertModal = new ConcertModal();