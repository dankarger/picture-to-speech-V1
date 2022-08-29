import stagesDescriptionConstant from "./constants";
import getImageSecondOption from "./api";
import {colorText, textPosition, textGenerator} from "./textGenerator";
import convertHtmlToCanvas from "./exporting";
import './styles/styles.scss'


const searchForm = document.querySelector("#search-form");
const searchFormatInput = searchForm.querySelector("input");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const stageDescription = document.querySelector('#stage-description');
const stageDiv = document.querySelector('.stage-div');
const stageCounter = stageDiv.querySelector('.stage-counter');
const tryDiv = stageDiv.querySelector('.try');
const recognitionText = document.querySelector('.recognition--text');
const userInputText = document.querySelector('.user-input');
const resultDiv  = document.querySelector('#image-div');
// import  htm2canvas from '../node_modules/html2canvas'
let stage = 1;

if (SpeechRecognition) {
    console.log("browser support");
    searchForm.insertAdjacentHTML("beforeend", '          <button type="button" class="icon mic-off">MIC ICON</button>\n')
    const micBtn = searchForm.querySelector("button");
    const micIcon = searchForm.querySelector(".icon");

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    // recognition.lang = "he"

    console.log('lng', SpeechRecognition.lang)
    micBtn.addEventListener('click', micBtnClick);

    function micBtnClick() {
        if (micIcon.classList.contains('mic-off')) {
            recognition.start();
        } else {

            recognition.stop();
        }
    }

    recognition.addEventListener("start", startSpeechRecognition);// <=> recognition.onstart = function(){...}
    function startSpeechRecognition() {
        micIcon.classList.remove('mic-off');
        micIcon.classList.add('mic-on');
        searchFormatInput.focus();
        console.log("Speech Recognition Active")
        tryDiv.textContent = stagesDescriptionConstant[stage];
        stageCounter.textContent = `${stage}) `;
    }

    recognition.addEventListener("end", endSpeechRecognition);// <=> recognition.onend = function(){...}
    function endSpeechRecognition() {
        micIcon.classList.remove('mic-on');
        micIcon.classList.add('mic-off');
        searchFormatInput.focus();
        console.log("Speech Recognition Disconnected")
    }

    recognition.addEventListener("result", resultOfSpeechRecognition);// <=> recognition.onresult = function(){...}
    function resultOfSpeechRecognition(event) {
        recognitionText.textContent = "";
        recognitionText.classList.remove('fade-out');
        recognitionText.classList.add('fade-in')
        console.log('event', event, stage);

        const currentResult = event.resultIndex
        const transcript = event.results[currentResult][0].transcript;
        updateUserInput(transcript);
        // searchFormatInput.value = transcript;
        if (transcript.toLowerCase().trim() === 'stop recording') {
            recognition.stop()
        } else if (!searchFormatInput.value) {
            searchFormatInput.value = transcript
        }
        // else {
        //     if (transcript.toLowerCase().trim() === 'go back') {
        //         // searchForm.action = `http://localhost:8080/api/picture?query=${transcript}`
        //         // getImageSecondOption(transcript)
        //         // console.log('go back')
        //         // stage--;
        //         // searchFormatInput.value = '';
        //
        //     } else if (transcript.toLowerCase().trim() === 'reset input') {
        //         searchFormatInput.value = '';
        //     }
        //     else {
        //         searchFormatInput.value = transcript
        //     }
        // }
        setTimeout(() => {
            recognitionText.textContent = transcript;
            recognitionText.classList.remove('fade-in')
            recognitionText.classList.add('.fade-out');

            activateStage(transcript)
            // searchForm.submit();
        }, 50)
    }
} else {
    console.log("browser dont support")
}


const activateStage = async (transcript) => {
    if (transcript === ' go back') {
        // updateStageInformation();
        stage > 1? stage-=2: stage = 1
        updateStageInformation();
        return
    }
    if (stage === 1) {
        getImageSecondOption(transcript);
        updateStageInformation();
    } else if (stage === 2) {
        console.log('phase2');
        textGenerator(transcript);
        updateStageInformation();
    } else if (stage === 3) {
        console.log('phase3');
        if(transcript===' continue'){
            updateStageInformation();
        }
        colorText(transcript);
    }
    else if(stage===4){
        console.log('stage4', transcript)
        textPosition(transcript.toLowerCase());
        updateStageInformation();
        if(transcript==='download'|| transcript===' download') {
            console.log('dddddddddd1')
            const mergedImage = convertHtmlToCanvas();
            const newImage = document.createElement('img');
            newImage.src = await mergedImage;
            resultDiv.appendChild(newImage);


        }
    }
}


const updateStageInformation = ()=>{
    console.log('g',stagesDescriptionConstant[stage])
    stage< 4 ? stage++ : stage = 4;
    stageDescription.textContent = stagesDescriptionConstant[stage]
    stageCounter.textContent = `${stage}) `;

}

const updateUserInput =(input)=> {
    userInputText.classList.remove('fade-in');
    userInputText.classList.add('fade-out');
    userInputText.textContent = `user: ${input}`;
    userInputText.classList.remove('fade-out');
    userInputText.classList.add('fade-in')
}