const searchForm = document.querySelector("#search-form");
const searchFormatInput = searchForm.querySelector("input");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const stageDescription = document.querySelector('#stage-description');
const stageDiv = document.querySelector('.stage-div');
const stageCounter = stageDiv.querySelector('.stage-counter');
const tryDiv = stageDiv.querySelector('.try')
let stage = 1;
stageCounter.textContent = stage


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
        tryDiv.textContent = stagesDescriptionConstant[stage]
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

        console.log('event', event, stage);

        const currentResult = event.resultIndex
        const transcript = event.results[currentResult][0].transcript
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
            activateStage(transcript)
            // searchForm.submit();
        }, 550)
    }
} else {
    console.log("browser dont support")
}


const activateStage = (transcript) => {
    if (transcript === ' go back') {
        stageCounter.textContent = stage

        console.log('gooogogoback1',stage)
        stage > 1? stage--: stage=1
        console.log('gooogogoback2',stage)
        stageCounter.textContent = stage

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
        colorText(transcript);
        updateStageInformation()
    }
}


const updateStageInformation = ()=>{
    console.log('g',stagesDescriptionConstant[stage])
    stage< 3 ? stage++ : stage = 3;
    stageDescription.textContent = stagesDescriptionConstant[stage]
    stageCounter.textContent = stage
}

