class StockModal {

    constructor() {
    }

    showButtons() {

        // Context relevant title and list of buttons
        const optionsTitle = document.getElementById('optionsTitle');
        optionsTitle.innerHTML = `Stock options`;
        const optionButtons = document.getElementById('optionButtons');
        optionButtons.innerHTML = ``
    }


    showModal(option) {

        const modalHeader = document.getElementsByClassName('modal-header');
        const modalBody = document.getElementById('modalBodyAdmin');
        const modalFooter = document.getElementsByClassName('modal-footer');
               
        switch (option) {
            case "Create": {
                modalHeader[0].innerHTML = `<h2>Create new product...</h2>`
                modalBody.innerHTML = `Code here to select and delete an event`;
                modalFooter[0].innerHTML = `<button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`;
                break;
            }
            case "Delete": {
                modalHeader[0].innerHTML = `<h2>Delete product...</h2>`
                modalBody.innerHTML = `Code here to select and delete an event`;
                modalFooter[0].innerHTML = `<button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`;
                break;
            }
            case "Update": {
                modalHeader[0].innerHTML = `<h2>Update product...</h2>`
                modalBody.innerHTML = `Code here to select and update an event`;
                modalFooter[0].innerHTML = `<button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`;
                break;
            }
            default: {
            }
        }
    }
}

const stockModal = new StockModal();