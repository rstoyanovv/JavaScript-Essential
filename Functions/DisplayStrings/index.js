function displayString(input) {

    return () => {
        if(input.length > 0) {
            let container = document.getElementById('content');
            let string = document.createElement('div');
            let currentText = input.shift();
            string.textContent = currentText;
            container.appendChild(string);
        }
    }
}