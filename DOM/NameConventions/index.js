document.addEventListener('DOMContentLoaded', function () {
    const input1 = document.getElementById('name');
    const input2 = document.getElementById('case');
    const resultDiv = document.getElementById('result');
    const convertButton = document.getElementById('convertButton');
  
    convertButton.addEventListener('click', () => {
      const textToConvert = input1.value.trim();
      const developerCase = input2.value.trim();
  
      if (!textToConvert || !developerCase) {
        resultDiv.textContent = 'Please enter both text to convert and developer case.';
        return;
      }
  
      const words = textToConvert.split(' ');
      let convertedText = '';
      let wordsSize = words.length;
  
      for (let i = 0; i < wordsSize; i++) {
        let word = words[i];
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        convertedText += capitalizedWord;
      }

      switch(developerCase){
        case 'camelCase':
            convertedText = convertedText.charAt(0).toLowerCase() + convertedText.slice(1);
            break;
        case 'snake_case':
            convertedText = convertedText.replace(/\s+/g, '_').toLowerCase();
            break;
        case 'PascalCase':
            convertedText = convertedText.charAt(0).toUpperCase() + convertedText.slice(1);
            break;
        default:
            alert('Invalid developer case. Please use camelCase, snake_case, or PascalCase.');
            return;
      }
  
      resultDiv.textContent = convertedText;
    });
  });