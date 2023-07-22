function price(fruit, weight, pricePerKilo){
    let weightInKilos = weight / 1000;
    let finalPrice = weightInKilos * pricePerKilo;
    
    console.log(`I need $${finalPrice} to buy ${weightInKilos} kilograms ${fruit}.`);
}

price('orange', 2500, 1.8);
