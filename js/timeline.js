class TimelineHandler {
    endpointUrl = 'http://localhost:8080/get/allEvents';

    constructor() {
        this.events = [];
        this.fetchData();
    }

    async fetchData() {
        let response = await fetch(this.endpointUrl);
        this.events = await response.json();
        this.events.sort(function(a, b){
            return a.id - b.id;
        }); //Maybe the sort can be done in the fetch?

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
                      <img src="${this.events[index].imageUrl}" class="img-timeline">
                        <p>${this.events[index].description}</p>
                        <p><a href=${this.events[index].facebookLink}>${this.events[index].facebookLink}</a></p>
                      </div>
                    </div>
            `;
            listElement.innerHTML=targetContent;

            target.appendChild(listElement);            
        }
    }
}
let timelineHandler = new TimelineHandler();