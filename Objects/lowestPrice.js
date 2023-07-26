function lowestPrice (input) {

    let cars = [];

    while(input.length > 0) {
        let singleInputLine = input.shift().split(' | ');
        let city = singleInputLine[0];
        let car = singleInputLine[1];
        let price = singleInputLine[2];

        if(cars.filter(param => param.car === car).length > 0) {
            let obj = cars.find(param => param.car === car);

            if(obj.price > parseInt(price)) {
                obj.price = parseInt(price);
                obj.city = city;
            }
        } else {
            let obj = {car, city, price: parseInt(price)};
            cars.push(obj);
        }
    }

    for (const car of cars) {
        console.log(`${car.car} -> ${car.price} (${car.city})`);  
    }

}

lowestPrice(['Sofia | Mercedes | 80000', 'Varna | Audi | 96000', 'Shumen | BMW | 1000',
'Plovdiv | Mercedes | 73000', 'Sofia | Audi | 95999']);
