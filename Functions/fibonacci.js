function fibonacciNumbers() {
    let previous = 0;
    let current = 1;

    function getNextFibonacci(){
        let next = previous + current;
        previous = current;
        current = next;
        return current;
    }
    return getNextFibonacci;
}

const num = 10;
let i = 0;
let nextFibonacci = fibonacciNumbers();

while(i < num){
    console.log(nextFibonacci());
    i++;
}
    