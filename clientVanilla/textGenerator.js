const textDiv = document.querySelector('#text-div');
const textElement = textDiv.querySelector('.text');

const textGenerator =(text)=>{

    const fontSize = (textDiv.clientWidth / text.length);
    // if(fontSize<100)
        textElement.style.fontSize = `${fontSize}px`;

    console.log('font',fontSize, textDiv.clientWidth)
    textElement.textContent = text;
    // textDiv.appendChild(textDiv)
}

const colorText = (color)=>{
    textElement.style.color = color;
}