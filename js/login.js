
async function getCredentials() {
    let response = await fetch("http://localhost:8080/login");
    let data = await response.json();
    console.log(data.username);
    console.log(data.password);

    const username = document.getElementById('adminusername').value;
    const password = document.getElementById('adminpassword').value;
    
    if ((username === data.username) && (password === data.password)) {
        alert('success');
    } 
    if ((username !== data.username) && (password !== data.password)) {
        alert ('failed to log in')
    }
}

