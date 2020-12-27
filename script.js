document.querySelector("#login-button").addEventListener("click", function(event) {
    event.preventDefault()

    validate();
});


function validate() {
    let name = document.querySelector('#signin-email').value
    let password = document.querySelector('#signin-password').value

    if (name == "ramadhanarafi437@gmail.com" && password == 'ramadhana123') {
        window.location = "beranda-admin.html";
        alert("Login anda berhasil")
        return false

    } else {
        alert('Yang anda masukkan salah')
        return false
    }
}