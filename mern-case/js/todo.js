let username = document.getElementById("Username");
let password1 = document.getElementById("Password1");

function validate() {

    if (username.value == "admin" && password1.value == "12345") {
        //alert("Authorized Login Successful");
        //window.location.href = "../welcome.html"
        window.location = "../welcome.html";
        window.location.replace("../welcome.html");
    } else if (username.value == "admin" && password1.value != "12345") {
        alert("Incorrect Password");
    } else if (username.value != "admin" && password1.value == "12345") {
        alert("User Not Registered");
    } else {
        alert("Incorrect UserID and Password");
    }
}