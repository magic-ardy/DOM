let btnLogin = document.getElementById("btnLogin")

let authentication = () => {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if (username == "magic-ardy" && password == "ardy1980") {
        alert(`Selamat Datang ${username}`)
    } else {
        alert("Username atau password yang ada masukkan salah")
    }
}

btnLogin.addEventListener("click", authentication)