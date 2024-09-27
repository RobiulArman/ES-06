class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na chole na re')
    }
}

// don not need to use function name 

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);   //upper level
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}
// new keyword
class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    
}