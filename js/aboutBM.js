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


        //let employees = [{"firstName": "Lukas", "lastName": "S", "email": "lukas@bm.dk", "imgURL": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
        //           ,{"firstName": "Luke", "lastName": "T", "email": "luke@bm.dk", "imgURL": "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png"}
        //            ,{"firstName": "Lasse", "lastName": "S", "email": "l@bm.dk", "imgURL": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}];





        for (let index in this.employees) {

            // template is embedded

            let template = document.querySelector('#visitCardTemplate')

            let clone = template.content.cloneNode(true)
            clone.className = 'visitCard'

            let image = clone.querySelector('img')
            image.className = 'visitCardFoto'
            image.setAttribute("src", `${this.employees[index].imgURL}`)
            

            let fullName = clone.querySelector('#visitCardInfo')
            fullName.className = 'visitCardData'
            fullName.textContent = `${this.employees[index].firstName}` + " " + `${this.employees[index].lastName}`

            let email = clone.querySelector('#visitCardEmail')
            email.className = 'visitCardData'
            email.textContent = `${this.employees[index].email}`

            let target = document.querySelector('#visitCards')
            target.appendChild(clone)

        }
    }

}
let aboutClass = new About();
=======
class About{

constructor(){

}



}

var aboutClass = new About();