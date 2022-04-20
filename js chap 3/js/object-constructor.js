var hotel = new Object();

hotel.name = 'Tuanc';
hotel.rooms = 150;
hotel.booked = 120;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
}

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();