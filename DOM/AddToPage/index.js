function addCar() {
    let inputElement = document.getElementById('newCar');
    let ulElement = document.getElementById('list');
    let liElement = document.createElement('li');

    liElement.textContent = inputElement.value; 
    ulElement.appendChild(liElement);
}