function performOperation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            result = num1 / num2;
            break;
        default:
            alert('Invalid operation.');
            return;
    }

    document.getElementById('result').textContent = result;

    const imageURL = 'meme.jpg';
    document.getElementById('resultImage').src = imageURL;

    // Show the image element
    document.getElementById('resultImage').style.display = 'block';

    // Resize the image to 200x200 (you can adjust the size as needed)
    document.getElementById('resultImage').style.width = '355px';
    document.getElementById('resultImage').style.height = '237px';
}

//Clear functionality
function clearCalculator() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';

    document.getElementById('result').textContent = '';

    const resultImage = document.getElementById('resultImage');
    resultImage.style.display = 'none';
    resultImage.src = '';
}