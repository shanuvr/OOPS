let Car = {
    brand:"toyota",
    model:"supra",
    speed:"200km/hr",
    drive(){
        console.log(`${this.model} driving at ${this.speed}`);
        
    }
    ,
    stop(){
        console.log(`${this.model} stops`);
        
    }

}

Car.stop()
Car.drive()