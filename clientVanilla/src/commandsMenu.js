import {speak} from "./textToSpeech";
import {downloadFromBtn} from "./exporting";
import {continueFunction, goBackFunction} from "./main";

export const continueCommandButtonFunction =  () => {
    speak('continue')
    continueFunction()
}

export const goBackCommandButtonFunction =  () => {
    speak('go back')
    goBackFunction()
}
export const downloadCommandButtonFunction = async () => {
    speak('download')
    await downloadFromBtn()
}

export const resetCommandButtonFunction = () => {
        const imageContainer = document.querySelector('.container-img');
        const credits = document.querySelector('.credits');
        const title = document.querySelector('.title');
        const userInput = document.querySelector('#firstInput')
    if (imageContainer) {
        imageContainer.remove();
        credits.remove();
        title.remove();
        userInput.remove();
    }
}