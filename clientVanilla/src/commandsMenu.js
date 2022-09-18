import {speak} from "./textToSpeech";
import {downloadFromBtn} from "./exporting";
import {activateStage} from "./main";
import {stage} from "./main";


let stage2 = stage
export const continueCommandButtonFunction = async () => {
    await activateStage(stage2,'continue')
    // speak('continue', true)
}

export const goBackCommandButtonFunction = async () => {
    await activateStage(stage2,'go back')
    // speak('go back', true)

}
export const downloadCommandButtonFunction = async () => {
    await downloadFromBtn()
    // speak('download', true)
}
