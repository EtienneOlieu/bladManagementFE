class About {
    endpointUrl = 'http://localhost:8080/get/allEmployees';

    constructor() {
        this.employees = [];
        this.fetchData();
    }

    async fetchData() {
        let response = await fetch(this.endpointUrl);
        this.employees = await response.json();

        this.updatePage();
    };

    updatePage() {

        for (let index in this.employees) {

            let target = document.querySelector('#visitCards')
            
            
            let template = document.querySelector('#visitCardTemplate')
            let clone = template.content.cloneNode(true)

            let image = clone.querySelector('img')
            image.className = 'visitCardFoto'
            image.setAttribute("src", `${this.employees[index].imgURL}`)

            let fullName = clone.querySelector('#visitCardInfo')
            fullName.textContent = `${this.employees[index].firstName}` + " " + `${this.employees[index].lastName}`

            let email = clone.querySelector('#visitCardEmail')
            email.textContent = `${this.employees[index].email}`
            
            target.append(clone)
        }
    }
}
let aboutClass = new About();