
const synth = window.speechSynthesis;
const activateSpeechCheckBox = document.querySelector('#voice-check-box');
const voiceDiv = document.querySelector('.voice-div');
const voiceWrapperDiv = document.querySelector('.voice-wrapper-div');

let voices = [];

const getVoices = () => {
    voices = synth.getVoices();
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = voice.name + '(' + voice.lang + ')';
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
    });
};

getVoices();
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}

export const speak = (textInput, stageDivClicked= false) => {
    let playStatus = voiceDiv.classList.contains('voice-on')
    console.log('play',playStatus)
    if(stageDivClicked) playStatus = true;
    if(!playStatus) return
    if (synth.speaking) {
        console.error('Already speaking');
        return;
    }
    if (textInput !== '') {
        const speakText = new SpeechSynthesisUtterance(textInput)
        speakText.onend = e => {
            console.log('Done speaking');
        }
        speakText.lang   = 'en-US';
        speakText.onerror = e => {
            console.error('Something went wrong')
        }
        synth.speak(speakText) //
    }
}

const handleVoiceClick = (e)=>{
    const stageText = document.querySelector('#stage-description').textContent
    activateSpeechCheckBox.click();
    voiceDiv.classList.toggle('voice-on');
    voiceDiv.classList.toggle('voice-off');
    speak(stageText)
}

voiceWrapperDiv.addEventListener('click',handleVoiceClick)