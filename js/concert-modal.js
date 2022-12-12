class ConcertModal {

    constructor() {
    }

    showModal(t) {

        const modalHeader = document.getElementsByClassName('modal-header');
        modalHeader[0].innerHTML = `<h2>${t}</h2>`

        const modal = document.getElementById('modalBodyAdmin');
        modal.innerHTML = `<div class="eventOptions" id="edit-events">
        <form id="form-events" action="javascript:eventhandler.createEvent()">
            <textarea type="text" id="event-description" rows="5" cols="50"
                placeholder="description"></textarea><br>
            <input type="date" id="event-date"><br>
            <input type="text" id="event-url" placeholder="image link"><br>
            <input type="text" id="event-facebookLink" placeholder="facebook link"><br>
            <button class="btn btn-success" type="submit" data-bs-dismiss="modal" aria-label="Close">Submit event</button>
        </form>        
        </div>`;

        const modalFooter = document.getElementsByClassName('modal-footer');
        modalFooter[0].innerHTML = `<button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`;

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