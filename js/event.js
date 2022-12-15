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
    
        await fetch('http://localhost:8080/create/event', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(eventObject)
        });
        alert("Event created")
        eventModal.getAllEvents();
    }   
    
    async deleteEvent(id){

        const confirmDelete = confirm("Are you sure?");
        if (confirmDelete) {
            await fetch(`http://localhost:8080/delete/event/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            alert("Event deleted")
            eventModal.getAllEvents();
        }       
    }
    
    async updateEvent(eventObject){
        const objectasjson = JSON.stringify(eventObject);
        const confirmUpdate = confirm("Are you sure you want to update event?");
        if (confirmUpdate){
            await fetch(`http://localhost:8080/update/event`,{
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: objectasjson
            });
            alert("Event updated")
            eventModal.getAllEvents();
        }
    }
}
let eventhandler = new EventHandler();


