


//

const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4; 
    this.maximumSpeed = 160;
    this.fule = 10;
    this.scheduleService = false;
    }
    loadPassenger(num){
        this.passenger = num 
        this.passenger <= this.maximumPassengers ? console.log("their is avalable room") : console.log("Not enough room for all passengers");
    }
    start(){
        this.fule > 0 ? console.log("The car starts") : console.log("The car wont start")
    }
    checkService(){
        this.mileage >= 30000 ? this.scheduleService = true : this.scheduleService = false
        console.log(this.scheduleService)
    }
}

let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)




