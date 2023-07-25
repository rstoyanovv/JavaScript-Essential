function modifyObj(object) {
    let newObject = {};
    let engine = {};
    let carriage = {};

    newObject.model = object.model;

    if(object.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else {
        if(object.power <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        } else {
            engine.power = object.power;
            engine.volume = 3600;
        }
    }

    carriage.type = object.carriage;
    carriage.color = object.color;

    if(object.wheelsize % 2 == 0) {
        object.wheelsize --;
    }

    newObject.engine = engine;
    newObject.carriage = carriage;

    newObject.wheelsize = [object.wheelsize, object.wheelsize, object.wheelsize, object.wheelsize];
    
    return newObject;
}

console.log ( 
    modifyObj ({
    model: "Mercedes GLE",
    power: 237,
    color: "Black",
    carriage: "SUV",
    wheelsize: 18 
}));
