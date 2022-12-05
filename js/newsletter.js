class Newsletter{

    constructor(){
    }

    signUp(){ 

        let emailInput = document.getElementById('emailInput').value;
        //Clears inputfield after submitting email
        document.getElementById('formID').reset();

        alert('Thank you for signing up to our newsletter 💪')

        fetch('http://localhost:8080/create/emailToList',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'email': emailInput
            })
        })
    }

    async getNewsListToDelete(){
        let response = await fetch('http://localhost:8080/get/allEmails');
        let data = await response.json();

        let emailInput = document.getElementById('emailInput').value;
        
        data.forEach(element => {
            if (element.email === emailInput){
                this.unsubscribe(element.id);
            } else {
                alert('Email not found');
            } 
        });
    }

    async unsubscribe(id){
        fetch (`http://localhost:8080/delete/emailFromList/${id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            } 
        });

    
    }
}

const newsletter = new Newsletter();