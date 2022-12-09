class EventHandler{

    constructor(){}

    async createEvent(){
    
        const desc = document.getElementById('event-description').value;
        const date = document.getElementById('event-date').value;
        const image = document.getElementById('event-url').value;
        const facebook = document.getElementById('event-facebookLink').value;
    
        const eventObject = {
            'description': desc,
            'date': date,
            'imageUrl': image,
            'facebookLink':facebook
        };
    
        fetch('http://localhost:8080/create/event', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(eventObject)
        });
    }    
}
let eventhandler = new EventHandler();


