function sort(input) {

    let result = input.sort((a,b) => a.localeCompare(b));  
    let firstLetter = '';
    let size = result.length;
    let obj = {};
    let output = '';

    for(let i = 0; i < size; i++) {
        let[product, price] = result[i].split(' : ');

        obj[product] = price;

        if(result[i][0] !== firstLetter){
            output += result[i][0] + '\n';
        }
        output += `  ${product}: ${obj[product]} \n`;

        firstLetter = result[i][0];
    }

    return output;
    
}

const testInput = ['Audi : 2', 'Mercedes : 14', 'Toyota : 6', 'BMW : 2', 'VW : 3', 'Volga : 1', 
'Bentley : 1', 'Maybach : 3'];

let test = sort(testInput);

console.log(test);
