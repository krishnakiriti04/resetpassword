async function register() {
    //let matchkey = generateRandomString();
    let data = {
        name: document.getElementById('name').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    }

    fetch('http://localhost:4000/register', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'content-Type': "application/json"
            }
        }).then(res => {
            alert("Registration successful");
            location.reload();
        })
        .catch(err => console.log(err))
}