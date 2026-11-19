export const AIRCRAFT_SPECS = {
    MAX_SPEED_KMH: 900,
    MAX_ALTITUDE_M: 12000,
    FUEL_CAPACITY_L: 26000,
    CRUISE_ALTITUDE_M: 10000,
} as const;

enum FlightStatus {
    OnGround = "На землі",
    Boarding = "Посадка",
    InAir = "У польоті",
    Landed = "Приземлився",
}

interface Flyable {
    fly(): string;
}

interface Identifiable {
    readonly flightNumber: string;
}

interface Aircraft extends Flyable, Identifiable {
    model: string;
    land(): string;
}

interface Refuelable {
    fuel: number;
    refuel(liters: number): void;
}

interface PassengerCarrier {
    passengers: number;
    board(count: number): void;
}

abstract class Vehicle {
    protected speed: number = 0;

    constructor(public manufacturer: string) { }

    accelerate(value: number): void {
        this.speed = Math.min(this.speed + value, this.getMaxSpeed());
    }

    abstract getMaxSpeed(): number;
}

abstract class Airplane extends Vehicle {
    protected altitude: number = 0;

    climb(meters: number): void {
        this.altitude = Math.min(this.altitude + meters, this.getMaxAltitude());
    }

    abstract getMaxAltitude(): number;
}

export class PassengerJet extends Airplane implements Aircraft, Refuelable, PassengerCarrier {
    readonly flightNumber: string;
    model: string;
    fuel: number = 0;
    passengers: number = 0;
    status: FlightStatus = FlightStatus.OnGround;

    constructor(manufacturer: string, model: string, flightNumber: string) {
        super(manufacturer);
        this.model = model;
        this.flightNumber = flightNumber;
    }

    getMaxSpeed(): number {
        return AIRCRAFT_SPECS.MAX_SPEED_KMH;
    }

    getMaxAltitude(): number {
        return AIRCRAFT_SPECS.MAX_ALTITUDE_M;
    }

    fly(): string {
        this.status = FlightStatus.InAir;
        return `Рейс ${this.flightNumber} летить на висоті ${this.altitude} м зі швидкістю ${this.speed} км/год`;
    }

    land(): string {
        this.altitude = 0;
        this.speed = 0;
        this.status = FlightStatus.Landed;
        return `${this.manufacturer} ${this.model} приземлився`;
    }

    refuel(liters: number): void {
        this.fuel = Math.min(this.fuel + liters, AIRCRAFT_SPECS.FUEL_CAPACITY_L);
    }

    board(count: number): void {
        this.passengers += count;
        this.status = FlightStatus.Boarding;
    }
}

const jet = new PassengerJet("Boeing", "737", "PS101");

console.log(jet.status);

jet.refuel(AIRCRAFT_SPECS.FUEL_CAPACITY_L);
jet.board(180);
console.log(jet.status);

jet.accelerate(AIRCRAFT_SPECS.MAX_SPEED_KMH);
jet.climb(AIRCRAFT_SPECS.CRUISE_ALTITUDE_M);

console.log(jet.fly());
console.log(jet.status);
console.log(`Пасажирів: ${jet.passengers}, пальне: ${jet.fuel} л`);

console.log(jet.land());
console.log(jet.status);