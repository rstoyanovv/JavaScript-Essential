function toObject(input) {
    let myObj = {};
    let n = input.length;

    for(let i = 0; i < n; i += 2) {
        let product = input[i];
        let count = input[i + 1];
        myObj[product] = count;
    }

    console.log(myObj);

}

toObject(['Apple', '4', 'Tomato', '3', 'Banana', '6']);
