function bookRoom() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let roomType = document.getElementById("roomType").value;
    let checkIn = document.getElementById("checkIn").value;
    let checkOut = document.getElementById("checkOut").value;

    if (name === "" || email === "" || checkIn === "" || checkOut === "") {
        alert("Please fill out all fields!");
        return;
    }

    let confirmationMessage = `Thank you, ${name}! Your ${roomType} room has been booked from ${checkIn} to ${checkOut}. Confirmation has been sent to ${email}.`;
    document.getElementById("confirmationMessage").innerText = confirmationMessage;
}