class TimelineHandler {
    endpointUrl = 'http://localhost:8080/get/allEvents';

    constructor() {
        this.events = [];
        this.fetchData();
    }

    async fetchData() {
        let response = await fetch(this.endpointUrl);
        this.events = await response.json();
        this.events.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        }); //Maybe the sort can be done in the fetch?

        this.updatePage();
    };

    updatePage() {

        for (let index in this.events) {

            let target = document.querySelector('#ul-timeline')

            let listElement = document.createElement('li')
            listElement.className = "timeline-item";

            /* The code here is adapted from https://csshint.com/horizontal-timeline-css/
            Licence by: 'Free Hand picked Pure Html Horizontal Timeline CSS Examples for you to use in your projects' */
            let targetContent = `
                    <div class="timeline-badge primary"><i class="glyphicon glyphicon-check"></i></div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4 class="timeline-title timeline-centered">
                        ${this.events[index].date}</h4>
                      </div>
                      <div class="timeline-body">
                        <div><img src="${this.events[index].imageUrl}" class="timeline-img"></div>
                        <div style="height: 100px";>${this.events[index].description}</div>
                        <div class="timeline-centered"><a href=${this.events[index].facebookLink}>Click here to see on facebook</a></div>                        
                      </div>
                    </div>
            `;
            listElement.innerHTML = targetContent;
            target.appendChild(listElement);
        }
    }
}
let timelineHandler = new TimelineHandler();