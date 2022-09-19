import {speak} from "./textToSpeech";
import {downloadFromBtn} from "./exporting";
import {continueFunction, goBackFunction} from "./main";

export const continueCommandButtonFunction =  () => {
    continueFunction()
}

export const goBackCommandButtonFunction =  () => {
    goBackFunction()
}
export const downloadCommandButtonFunction = async () => {
    await downloadFromBtn()
}

export const resetCommandButtonFunction = () => {
        const imageContainer = document.querySelector('.container-img');
        imageContainer.remove()
}