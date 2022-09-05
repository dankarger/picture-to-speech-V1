import stagesDescriptionConstant from "./constants";


const synth = window.speechSynthesis;
const activateSpeechCheckBox = document.querySelector('#voice-check-box');

let voices = [];

const getVoices = () => {
    voices = synth.getVoices();
    console.log(voices);

    //LOOP THROUGHT VOICES
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = voice.name + '(' + voice.lang + ')';

        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        // voiceSelect.appendChild(option);
    });
};


getVoices();
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}

export const speak = (textInput) => {

    const playStatus = activateSpeechCheckBox.checked
    console.log('play',playStatus)
    if(!playStatus) return
    if (synth.speaking) {
        console.error('Already speaking');
        return;
    }
    if (textInput !== '') {
        // body.style.background = '#141414 url(img/wave.gif)';
        // body.style.backgroundRepeat = 'repeat-x';
        // body.style.backgroundSize = '100% 100%';
        const speakText = new SpeechSynthesisUtterance(textInput)
        speakText.onend = e => {
            console.log('Done speaking');
            // body.style.background = '#141414';

        }
        speakText.lang   = 'en-US';
        speakText.onerror = e => {
            console.error('Something went wrong')
        }
        // speakText.voice = {voiceURI: 'Alex', name: 'Alex', lang: 'en-US', localService: true, default: true}
        // const selectedVoice = voices[0]
        //     .getAttribute('data-name');
        // speakText.voice = "alex";
        // voices.forEach(voice => {
        //     if (voice.name === selectedVoice) {
        //         speakText.voice = voice;
        //     }
        // });

        // speakText.rate = rate.value;
        // speakText.pitch = pitch.value;

        synth.speak(speakText) //
    }
}