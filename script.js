function bookTicket(button){

    button.innerHTML = "Booked";

    button.style.backgroundColor = "green";

    button.style.color = "white";
}

function toggleDetails(id){

    let details =
        document.getElementById(id);

    if(details.style.display === "block"){

        details.style.display = "none";

    }
    else{

        details.style.display = "block";

    }
}

function validateForm(){

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let event =
        document.getElementById("event").value;

    let tickets =
        document.getElementById("tickets").value;

    if(
        name === "" ||
        email === "" ||
        event === "" ||
        tickets === ""
    ){

        alert("Please fill all fields");

        return false;
    }

    alert("Booking Successful!");

    return true;
}