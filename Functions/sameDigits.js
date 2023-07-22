function isAllDigitsAreSame(num){
    const numStr = num.toString();
    const firstDigit = numStr[0];
    
    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] !== firstDigit) {
            return false;
        }
    }
    
    return true;
}

const number1 = 3333;
const number2 = 1234;

function print(number){
    if(isAllDigitsAreSame(number)) {
    console.log("All digits are the same.");
    } else {
    console.log("The digits are not the same!");
    }
}

print(number1);
print(number2);
