class TimelineHandler {
    endpointUrl = 'http://localhost:8080/get/allEvents';

    constructor() {
        this.events = [];
        this.fetchData();
    }

    async fetchData() {
        let response = await fetch(this.endpointUrl);
        this.events = await response.json();

        this.updatePage();
    };

    updatePage() {

        for (let index in this.events) {

            let target = document.querySelector('#ul-timeline')

            let listElement = document.createElement('li')
            listElement.className="timeline-item";


            let targetContent = `
                    <div class="timeline-badge primary"><i class="glyphicon glyphicon-check"></i></div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4 class="timeline-title">
                        ${this.events[index].date}</h4>
                      </div>
                      <div class="timeline-body">
                      <img src="${this.events[index].imageUrl}" class="img-thumbnail">
                        <p>${this.events[index].description}</p>
                        <p>${this.events[index].description}</p>
                        <p>${this.events[index].facebookLink}</p>
                      </div>
                    </div>
            `;

            listElement.innerHTML=targetContent;

            target.appendChild(listElement);
            
            /*
            let template = document.querySelector('#timeline-template')
            let clone = template.content.cloneNode(true)

            let date = clone.querySelector('timeline-title')
            date.textContent = `${this.events[index].data}`

             let image = clone.querySelector('img')
            image.className = 'visitCardFoto'
            image.setAttribute("src", `${this.employees[index].imgURL}`)

            let fullName = clone.querySelector('#visitCardInfo')
            fullName.textContent = `${this.employees[index].firstName}` + " " + `${this.employees[index].lastName}`

            let email = clone.querySelector('#visitCardEmail')
            email.textContent = `${this.employees[index].email}` */
            
            
        }
    }
}
let timelineHandler = new TimelineHandler();