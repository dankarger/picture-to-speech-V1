import html2canvas from 'html2canvas';
import {activateStage} from "./main";

const downloadBtn = document.querySelector('#download-btn');


export const convertHtmlToCanvas = async (currentTile="image") => {
    const container = document.querySelector('.results-container');
    const imageDiv = document.querySelector('#image-div');
    const text = document.querySelector('#text-div');
    imageDiv.appendChild(text);
    const options = {
        allowTaint: true
    }
    const newImage = document.createElement('img');
    newImage.id = 'img-id';
    newImage.crossOrigin = 'anonymous';
    const response =  html2canvas(imageDiv, { useCORS:true}).then(function (canvas){
        const imgBase64 = canvas.toDataURL();
        const imgURL = "data:image/" + imgBase64;
        const downloadLink = document.createElement('a');
        downloadLink.classList.add('download-link')
        downloadLink.href = imgURL
        downloadLink.download =  `${currentTile}.png`;
        downloadLink.click();
        canvas.style.width = '100%';
        const newImage = document.createElement('img');
        newImage.src = imgBase64
        downloadLink.appendChild(newImage);
        downloadLink.classList.add('thumb-img-style');
        container.appendChild(downloadLink);
        clearCurrenImg()
        return imgBase64
    });
    return response
}

export const downloadImage = async (src) => {
    const aTag = document.querySelector('#download-link')
    aTag.href = src
    aTag.download = "image.png";
    aTag.click();
}

export const clearCurrenImg = async () => {
    const title = document.querySelector('#title-id');
    const currentImage = document.querySelector('#currentImage');
    const imageDiv =  document.querySelector('.container-img');
    const textElement = document.querySelector('.text');

    // currentImage.remove();
    imageDiv.remove();
    textElement.textContent = '';
    title.remove();
}

export const downloadFromBtn = async ()=>{

    let currentImg = document.querySelector('#currentImage')
    // if(!currentImg){
    //     currentImg = document.querySelector('#currentImage')
    // }
    console.log('image',currentImg)
    if(currentImg) {
        await convertHtmlToCanvas('download');
        await activateStage(0, '');
    }
}

downloadBtn.addEventListener('click',downloadFromBtn )
