function typesOfVariables() {
    let array = Array.from(arguments);
    let typesCounter = [];

    array.forEach((element) => {
        typeOfElement = typeof element;
        console.log(`${typeOfElement} : ${element}`);

        if(!typesCounter[typeOfElement]){
            typesCounter[typeOfElement] = 0;
        }
        typesCounter[typeOfElement]++;
    });
    
    console.log(typesCounter);
}
typesOfVariables('car', 20, function() {console.log('Hello world');}, 'Hello');