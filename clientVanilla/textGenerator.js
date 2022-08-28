const textDiv = document.querySelector('#text-div');
const textElement = textDiv.querySelector('.text');

const textGenerator = (text) => {
    textDiv.classList.add('position--top');
    const fontSize = (textDiv.clientWidth / text.length);
    // if(fontSize<100)
    textElement.style.fontSize = `${fontSize}px`;

    console.log('font', fontSize, textDiv.clientWidth)
    textElement.textContent = text;
    // textDiv.appendChild(textDiv)
}

const colorText = (color) => {
    textElement.style.color = color;
}

const textPosition = (position) => {
    if (position === ' top' || position === 'up') {
        textDiv.classList.remove('position---center');
        textDiv.classList.remove('position---bottom');
        textDiv.classList.add('position--top');
    }else if (position=== ' center' || position === 'middle') {
        textDiv.classList.remove('position---top');
        textDiv.classList.remove('position---bottom');
        textDiv.classList.add('position--center');
    }
    else if (position=== ' bottom' || position === 'down') {
        textDiv.classList.remove('position---top');
        textDiv.classList.remove('position---center');
        textDiv.classList.add('position--bottom');
    }

}