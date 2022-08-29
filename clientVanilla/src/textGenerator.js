const textDiv = document.querySelector('#text-div');
const textElement = textDiv.querySelector('.text');

export const textGenerator = (text) => {
    textElement.classList.add('fade-in')
    textDiv.classList.add('position--top');
    const fontSize = (textDiv.clientWidth / text.length);
    // if(fontSize<100)
    textElement.style.fontSize = `${fontSize}px`;

    console.log('font', fontSize, textDiv.clientWidth)
    textElement.textContent = text;
    // textDiv.appendChild(textDiv)
}

export const colorText = (color) => {
    textElement.style.color = color;
}

export const textPosition = (position) => {
    if (position === ' top' || position === 'stop' || position === 'up') {
        textDiv.classList.remove('fade-in')
        textDiv.classList.add('fade-out');
        textDiv.classList.remove('position---center');
        textDiv.classList.remove('position---bottom');
        textDiv.classList.add('fade-in')
        textDiv.classList.add('position--top');
    }else if (position.toLowerCase()=== ' center' || position === 'middle') {
        textDiv.classList.remove('fade-in')
        textDiv.classList.add('fade-out');
        textDiv.classList.remove('position---top');
        textDiv.classList.remove('position---bottom');
        textDiv.classList.add('fade-in')
        textDiv.classList.add('position--center');
    }
    else if (position=== ' bottom' || position === 'down') {
        textDiv.classList.remove('fade-in')
        textDiv.classList.add('fade-out');
        textDiv.classList.remove('position---top');
        textDiv.classList.remove('position---center');
        textDiv.classList.add('fade-in');
        textDiv.classList.add('position--bottom');
    }

}