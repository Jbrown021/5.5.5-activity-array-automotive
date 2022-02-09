import Vehicle from "./vehicleBaseClass.js";

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.maxSpeed = 160;
        this.numberOfWheels = 4;
        this.fuel = 10;
        this.sceduleService = false;

    }

    start(){
        if (this.fuel > 0){
            console.log("engine has started.");

        }
        else {
            return this.started = false;
            console.log("no fuel");
        }
    }

    loadPassengers(num){
        if (this.passenger < this.maxPassengers){
            if((num + this.passenger) <= this.maxPassengers){

            }
            else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            }
        }   else {
            console.log(this.model + " " + this.make + " is full");
        }
        }
        sceduleService(milaage){
            if (this.mileage > 30000) {
                this.sceduleService == true
                return this.sceduleService;
            }
        }
