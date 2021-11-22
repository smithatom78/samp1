let username = document.getElementById("Username");
let password1 = document.getElementById("Password1");

function validate(callback) {

    if (username.value == "admin" && password1.value == "12345") {
        alert("Authorized Login Successful");
        //window.location.href = "../welcome.html"
        //  window.location = "../welcome.html";
        // window.location.replace("../welcome.html");
        callback();
    } else if (username.value == "admin" && password1.value != "12345") {
        alert("Incorrect Password");
    } else if (username.value != "admin" && password1.value == "12345") {
        alert("User Not Registered");
    } else {
        alert("Incorrect UserID and Password");
    }
}

function display() {
    window.location.href = "https://smithatom78.github.io/samp1/mern-case/welcome.html";
}