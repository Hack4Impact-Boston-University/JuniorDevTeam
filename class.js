// Explore what a class looks like


class Car { 
    constructor(model, color, year){
        this.modelAttribute = model
        this.colorAttribute = color 
        this.yearAttribute = year
    }

    
    changeModel(newModel) {
        this.modelAttribute = newModel; 
    }
}


let car = new Car("Ferrari", "Yellow", 2020)
console.log(car)
car.changeModel("Lamborghini");
console.log(car)
