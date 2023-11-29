document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#login").addEventListener("click", ProcessSubmit);
});

function ProcessSubmit(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    let responseJSON = JSON.parse(xhr.responseText);
                    if (responseJSON.success == "true") {
                        document.querySelector("#ThankYou").innerHTML = "Thank you for your submission!";
                        document.querySelector("#YourEmail").innerHTML = "Your Email: " + document.getElementById("email").value;
                        document.getElementById("YourPassword").style.display = "none";
                        document.getElementById("SignUp").style.display = "none";
                    } else {
                        document.querySelector("#ThankYou").innerHTML = "Sorry for your failure to submit";
                    }
                } catch (error) {
                    document.querySelector("#ThankYou").innerHTML = "There was an error processing your submission.";
                }
            } else {
                document.querySelector("#ThankYou").innerHTML = "Error in submission.";
            }
        }
    };

    xhr.open("POST", "processSignUp.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let userData = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    xhr.send(userData);
}

