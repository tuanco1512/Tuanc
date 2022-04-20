function Hotel (name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
};

var quayHotel = new Hotel('Quay', 48, 25);
var TuancHotel = new Hotel('Tuanc', 150, 120);

var details1 = quayHotel.name + 'rooms: ' ;
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = TuancHotel.name + 'rooms: ';
    details2 += TuancHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

