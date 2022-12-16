class EmployeeHandler{

constructor(){}


async createEmployee(){
    alert('Employee created')
    const image = document.querySelector('#employee-url').value;
    const firstName = document.querySelector('#employee-firstName').value;
    const lastName = document.querySelector('#employee-lastName').value;
    const email = document.querySelector('#employee-email').value;

    const employee = {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'imgURL': image
    }

    await fetch('http://localhost:8080/create/employee',{
        method: 'POST',
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(employee)
    });
    employeeModal.getAllEmployees();
}

async deleteEmployee(employeeId){
    const toDelete = confirm('Are you sure you want to delete this person?')
    
    if(toDelete){
        await fetch(`http://localhost:8080/delete/employee/${employeeId}`,{
            method: 'DELETE',
            headers:{
            "Content-type": "application/json"
            }
        })
    }
    alert('Delete complete')
    employeeModal.getAllEmployees();
}

}

const employeehandler = new EmployeeHandler();