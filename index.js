document.addEventListener("DOMContentLoaded", () => {
    fetch("db.json")
        .then(response => response.json())
        .then(data => {
            displayRooms(data.rooms);
            displayMenu(data.menu);
            displayEvents(data.events);
        })
        .catch(error => console.error("Error loading data:", error));
});

// Display Rooms
function displayRooms(rooms) {
    const roomDropdown = document.getElementById("roomType");
    roomDropdown.innerHTML = "";

    rooms.forEach(room => {
        if (room.availability) {
            let option = document.createElement("option");
            option.value = room.type;
            option.innerText = `${room.type} - Ksh.${room.price}/night`;
            roomDropdown.appendChild(option);
        }
    });
}

// Display Food Menu
function displayMenu(menu) {
    const menuSection = document.getElementById("menu");
    let menuHTML = "<h2>Food Menu</h2>";

    menu.forEach(item => {
        if (item.availability) {
            menuHTML += `
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: Ksh.${item.price}</p>
                </div>
            `;
        }
    });

    menuSection.innerHTML = menuHTML;
}

// Display Events
function displayEvents(events) {
    const eventSection = document.getElementById("events");
    let eventHTML = "<h2>Upcoming Events</h2>";

    events.forEach(event => {
        eventHTML += `
            <div>
                <h3>${event.name}</h3>
                <p>${event.description}</p>
                <p>Date: ${event.date} at ${event.time}</p>
                <p>Location: ${event.location}</p>
                <p>Price: Ksh.${event.price}</p>
                <p>Slots Available: ${event.slots}</p>
            </div>
        `;
    });

    eventSection.innerHTML = eventHTML;
}

function bookRoom() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const roomType = document.getElementById("roomType").value;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Validate input fields
    if (!name || !email || !roomType || !checkIn || !checkOut) {
        alert("❌ Please fill in all fields.");
        return;
    }

    // Show confirmation message
    confirmationMessage.innerHTML = `
        <p style="color: green; font-weight: bold;">
            ✅ Booking Confirmed for <b>${name}</b>!<br>
            Room: <b>${roomType}</b><br>
            Check-in: <b>${checkIn}</b><br>
            Check-out: <b>${checkOut}</b>
        </p>
    `;

    // Optionally clear the form after booking
    document.getElementById("bookingForm").reset();
}
