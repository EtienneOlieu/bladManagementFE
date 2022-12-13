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
        alert("Event created")
    }   
    
    async deleteEvent(id){
    
        await fetch(`http://localhost:8080/delete/event/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        alert("Event deleted")
    }   
}
let eventhandler = new EventHandler();


