document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    loadRoomsIntoSelect();
});

async function fetchData() {
    try {
        const response = await fetch("db.json");
        const data = await response.json();
        
        displayMenu(data.menu);
        displayRooms(data.rooms);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayMenu(menu) {
    const menuContainer = document.querySelector(".menu-container");
    menu.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<h3>${item.name}</h3><p>Price: Ksh.${item.price}</p>`;
        menuContainer.appendChild(div);
    });
}

function displayRooms(rooms) {
    const roomsContainer = document.querySelector(".rooms-container");
    rooms.forEach(room => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<h3>${room.type}</h3><p>Price: Ksh.${room.price}/night</p>`;
        roomsContainer.appendChild(div);
    });
}

async function loadRoomsIntoSelect() {
    try {
        const response = await fetch("db.json");
        const data = await response.json();
        
        const roomSelect = document.getElementById("roomType");
        data.rooms.forEach(room => {
            const option = document.createElement("option");
            option.value = room.type;
            option.textContent = `${room.type} - Ksh.${room.price}/night`;
            roomSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading rooms:", error);
    }
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const roomType = document.getElementById("roomType").value;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;

    const confirmationMessage = `
        <p>Thank you, <b>${name}</b>!</p>
        <p>Your booking for a <b>${roomType}</b> from <b>${checkIn}</b> to <b>${checkOut}</b> has been confirmed.</p>
    `;
    document.getElementById("confirmationMessage").innerHTML = confirmationMessage;
});
