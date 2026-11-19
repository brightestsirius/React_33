export const AIRCRAFT_SPECS = {
    MAX_SPEED_KMH: 900,
    MAX_ALTITUDE_M: 12000,
    FUEL_CAPACITY_L: 26000,
    CRUISE_ALTITUDE_M: 10000,
};
var FlightStatus;
(function (FlightStatus) {
    FlightStatus["OnGround"] = "\u041D\u0430 \u0437\u0435\u043C\u043B\u0456";
    FlightStatus["Boarding"] = "\u041F\u043E\u0441\u0430\u0434\u043A\u0430";
    FlightStatus["InAir"] = "\u0423 \u043F\u043E\u043B\u044C\u043E\u0442\u0456";
    FlightStatus["Landed"] = "\u041F\u0440\u0438\u0437\u0435\u043C\u043B\u0438\u0432\u0441\u044F";
})(FlightStatus || (FlightStatus = {}));
class Vehicle {
    manufacturer;
    speed = 0;
    constructor(manufacturer) {
        this.manufacturer = manufacturer;
    }
    accelerate(value) {
        this.speed = Math.min(this.speed + value, this.getMaxSpeed());
    }
}
class Airplane extends Vehicle {
    altitude = 0;
    climb(meters) {
        this.altitude = Math.min(this.altitude + meters, this.getMaxAltitude());
    }
}
export class PassengerJet extends Airplane {
    flightNumber;
    model;
    fuel = 0;
    passengers = 0;
    status = FlightStatus.OnGround;
    constructor(manufacturer, model, flightNumber) {
        super(manufacturer);
        this.model = model;
        this.flightNumber = flightNumber;
    }
    getMaxSpeed() {
        return AIRCRAFT_SPECS.MAX_SPEED_KMH;
    }
    getMaxAltitude() {
        return AIRCRAFT_SPECS.MAX_ALTITUDE_M;
    }
    fly() {
        this.status = FlightStatus.InAir;
        return `Рейс ${this.flightNumber} летить на висоті ${this.altitude} м зі швидкістю ${this.speed} км/год`;
    }
    land() {
        this.altitude = 0;
        this.speed = 0;
        this.status = FlightStatus.Landed;
        return `${this.manufacturer} ${this.model} приземлився`;
    }
    refuel(liters) {
        this.fuel = Math.min(this.fuel + liters, AIRCRAFT_SPECS.FUEL_CAPACITY_L);
    }
    board(count) {
        this.passengers += count;
        this.status = FlightStatus.Boarding;
    }
}
