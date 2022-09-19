import {speak} from "./textToSpeech";
import {downloadFromBtn} from "./exporting";
import {activateStage} from "./main";
import {stage} from "./main";

export const continueCommandButtonFunction = async () => {
    console.log('continue',     stage)
    await activateStage(stage,'continue')
    // speak('continue', true)
}

export const goBackCommandButtonFunction = async () => {
    console.log('goback',     stage)

    await activateStage(stage,'go back')
    // speak('go back', true)

}
export const downloadCommandButtonFunction = async () => {
    await downloadFromBtn()
    // speak('download', true)
}
