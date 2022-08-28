const textGenerator =(text)=>{
    const textDiv = document.querySelector('#text-div');
    const textElement = textDiv.querySelector('.text');
    textElement.textContent = text;
    // textDiv.appendChild(textDiv)
}