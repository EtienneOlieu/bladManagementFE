class Password{

    info = [];

    constructor(){}

    async getPassword(){
        const response = await fetch('http://localhost:8080/get/adminInfo');
        this.info = await response.json();
        console.log(this.info);
    }

    //In this case it doesn't show buttons but input fields instead 
    changePassword() {

        this.getPassword();

        // Context relevant title and list of buttons
        const optionsTitle = document.getElementById('optionsTitle');
        optionsTitle.innerHTML = `Change password`;
        const passwordFields = document.getElementById('optionButtons');
        passwordFields.innerHTML = `
        <form id="adminPassword" action="javascript:password.saveUpdate()">
            <label for="oldPassword">Gammelt password</label>
            <input type="text" id="oldPassword"><br><br>
            <label for="newPassword">Nyt password</label>
            <input type="text" id="newPassword"><br><br>
            <button type="submit" class="btn btn-dark">Change password</button>
        </form>
        `;
    }

    async saveUpdate(){

        const newPassword = document.querySelector('#newPassword').value;
        const adminObject = {
            "id": 1,
            "username": "admin",
            "password": newPassword
        }
        const newAdmin = JSON.stringify(adminObject);

        document.querySelector('#adminPassword').reset();
        
        const confirmUpdate = confirm("Are you sure you want to change password?");
        if (confirmUpdate){
            await fetch ('http://localhost:8080/update/adminInfo', {
                method: 'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body: newAdmin
            });
            console.log(newAdmin);
            alert('Password is changed');
        }
    }
}

const password = new Password();