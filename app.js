class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep.'
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

const kia = new Car('Kia', 'Soul', 2015)

class Motercycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!'
    }
}

const myHog = new Motercycle('Harley', 'Chopper Duel', 1972)

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newRide) {
        if (!(newRide instanceof Vehicle)) {
            return 'Only vehicles allowed!';
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry! We're full.";
        } else {
            this.vehicles.push(newRide)
            return "Vehicle added!";
        }
    }
}
let garage = new Garage(2);