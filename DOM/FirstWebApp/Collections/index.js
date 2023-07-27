function extractText() {
    let ulElement = document.getElementById("list");

    let textAreaElement = document.getElementById("result");
    textAreaElement.textContent = ulElement.textContent;
};