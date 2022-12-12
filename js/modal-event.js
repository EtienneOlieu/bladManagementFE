class EventModal {

    constructor() {
    }

    showButtons() {

        // Context relevant title and list of buttons
        const optionsTitle = document.getElementById('optionsTitle');
        optionsTitle.innerHTML = `Events options`;
        const optionButtons = document.getElementById('optionButtons');
        optionButtons.innerHTML = `
        <button class="btn btn-dark" onclick="eventModal.showModal('Create')" data-bs-toggle="modal" data-bs-target="#popupAdmin">Create</button><br><br>
        <button class="btn btn-dark" onclick="eventModal.showModal('Delete')" data-bs-toggle="modal" data-bs-target="#popupAdmin">Delete</button><br><br>
        <button class="btn btn-dark" onclick="eventModal.showModal('Update')" data-bs-toggle="modal" data-bs-target="#popupAdmin">Update</button><br><br></br>`
    }


    showModal(option) {

        const modalHeader = document.getElementsByClassName('modal-header');
        const modalBody = document.getElementById('modalBodyAdmin');
        const modalFooter = document.getElementsByClassName('modal-footer');
               
        switch (option) {
            case "Create": {
                modalHeader[0].innerHTML = `<h2>Create new event...</h2>`
                modalBody.innerHTML = `<div class="eventOptions" id="edit-events">
                <form id="form-events" action="javascript:eventhandler.createEvent()">
                    <textarea type="text" id="event-description" rows="5" cols="50"
                        placeholder="description"></textarea><br>
                    <input type="date" id="event-date"><br>
                    <input type="text" id="event-url" placeholder="image link"><br>
                    <input type="text" id="event-facebookLink" placeholder="facebook link"><br>
                    <button class="btn btn-success" type="submit" data-bs-dismiss="modal" aria-label="Close">Submit event</button>
                </form>        
                </div>`;
                modalFooter[0].innerHTML = `<button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`;
                break;
            }
            case "Delete": {
                modalHeader[0].innerHTML = `<h2>Delete event...</h2>`
                modalBody.innerHTML = `Code here to select and delete an event`;
                modalFooter[0].innerHTML = `<button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`;
                break;
            }
            case "Update": {
                modalHeader[0].innerHTML = `<h2>Update event...</h2>`
                modalBody.innerHTML = `Code here to select and update an event`;
                modalFooter[0].innerHTML = `<button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`;
                break;
            }
            default: {
            }
        }
    }
}

const eventModal = new EventModal();