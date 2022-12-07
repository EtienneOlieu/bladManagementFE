class Login {

    constructor() {
    }

    async getLoginCredentials() {
        let response = await fetch('http://localhost:8080/login');
        let credentials = await response.json();

        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;

        if (username === credentials.username && password === credentials.password) {
            alert("yah");
        }
        else {
            alert("booh");
        }


    }

}
let login = new Login();