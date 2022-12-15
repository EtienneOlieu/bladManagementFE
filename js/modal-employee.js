class EmployeeModal {

    employees = [];
    currentEmployee;

    constructor() {}

    async getAllEmployees() {
        let response = await fetch('http://localhost:8080/get/allEmployees');
        this.currentEmployee = 0;
        this.employees = await response.json();
    }

    // Buttons right
    showButtons() {

        this.getAllEmployees();

        // Context relevant title and list of buttons
        const optionsTitle = document.getElementById('optionsTitle');
        optionsTitle.innerHTML = `Employee options`;
        const optionButtons = document.getElementById('optionButtons');
        optionButtons.innerHTML = `
        <button class="btn btn-dark" onclick="employeeModal.showModal('Create')" data-bs-toggle="modal" data-bs-target="#popupAdmin">Create</button><br><br>
        <button class="btn btn-dark" onclick="employeeModal.showModal('Delete')" data-bs-toggle="modal" data-bs-target="#popupAdmin">Delete</button><br><br>`
    }


    showModal(option) {

        const modalHeader = document.getElementsByClassName('modal-header');
        const modalBody = document.getElementById('modalBodyAdmin');
        const modalFooter = document.getElementsByClassName('modal-footer');

        switch (option) {
            case "Create": {
                modalHeader[0].innerHTML = `<h2>Create new employee...</h2><button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`
                modalBody.innerHTML = `<div class="eventOptions" id="edit-events">
                <form id="form-employees" action="javascript:employeehandler.createEmployee()">
                    <input type="text" id="employee-url" placeholder="image link"><br>
                    <input type="text" id="employee-firstName" placeholder="first name"><br>
                    <input type="text" id="employee-lastName" placeholder="last name"><br>
                    <input type="email" id="employee-email" placeholder="email address"><br>
                    <button class="btn btn-success" type="submit" data-bs-dismiss="modal" aria-label="Close">Submit employee</button>
                </form>        
                </div>`;
                break;
            }
            case "Delete": {
                modalHeader[0].innerHTML = `<h2>Delete employee...</h2><button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Cancel</button>`

                modalBody.innerHTML = `
                <h2>${this.employees[this.currentEmployee].firstName} ${this.employees[this.currentEmployee].lastName}</h2>
                <img src = "${this.employees[this.currentEmployee].imgURL}" class="adminModalEventImage">
                <div>${this.employees[this.currentEmployee].email}</div>
                <button class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onclick="employeehandler.deleteEmployee(${this.employees[this.currentEmployee].id})">Delete</button>
                `;

                modalFooter[0].innerHTML = `
                <button class="btn btn-dark" onclick="employeeModal.decrementCount()"><</button>
                <button class="btn btn-dark" onclick="employeeModal.incrementCount()">></button>`;
                break;
            }
            default: {
            }
        }
    }

    incrementCount() {
        this.currentEmployee++;
        if (this.currentEmployee > this.employees.length - 1) {
            this.currentEmployee = 0;
        }
        document.getElementById('modalBodyAdmin').innerHTML = `
        <h2>${this.employees[this.currentEmployee].firstName} ${this.employees[this.currentEmployee].lastName}</h2>
        <img src = "${this.employees[this.currentEmployee].imgURL}" class="adminModalEventImage">
        <div>${this.employees[this.currentEmployee].email}</div>
        <button class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onclick="employeehandler.deleteEmployee(${this.employees[this.currentEmployee].id})">Delete</button>
        `;
    }

    decrementCount() {
        this.currentEmployee--;
        if (this.currentEmployee < 0) {
            this.currentEmployee = this.employees.length - 1;
        }
        document.getElementById('modalBodyAdmin').innerHTML = `
        <h2>${this.employees[this.currentEmployee].firstName} ${this.employees[this.currentEmployee].lastName}</h2>
        <img src = "${this.employees[this.currentEmployee].imgURL}" class="adminModalEventImage">
        <div>${this.employees[this.currentEmployee].email}</div>
        <button class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onclick="employeehandler.deleteEmployee(${this.employees[this.currentEmployee].id})">Delete</button>
        `;
    }
}

const employeeModal = new EmployeeModal();