function addCar() {
    let inputElement = document.getElementById('newCar');
    let ulElement = document.getElementById('list');
    let liElement = document.createElement('li');

    liElement.textContent = inputElement.value; 
    ulElement.appendChild(liElement);
}

function deleteCar() {
    let carInputElement = document.getElementById('car');
    let carsInList = document.querySelectorAll('li');

    let carArray = Array.from(carsInList);

    let searchCar = carArray.find(x => x.textContent == carInputElement.value);
    searchCar.remove();
}
