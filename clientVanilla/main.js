const searchForm = document.querySelector("#search-form");
const searchFormatInput = searchForm.querySelector("input");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const stageDescription = document.querySelector('#stage-description');
const stageDiv = document.querySelector('.stage-div');
const stageCounter = stageDiv.querySelector('.stage-counter');

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
        stageDescription.textContent = stageDescription[stage]
        stage++;
        stageCounter.textContent = stage
    } else if (stage === 2) {
        console.log('phase2')
        textGenerator(transcript)
        console.log('texxxxt:',transcript)
        stage++
        stageCounter.textContent = stage
        stageDescription.textContent = stageDescription[stage]
    } else if (stage === 3) {
        console.log('phase3')
        stageDescription.textContent = stageDescription[stage]

    }
}


const getPictureApi = async (query) => {
    try {
        const response = await fetch(`/api/picture?query=${query}`);
        if (response.status === 200) {
            // const word = response.data.split('');


        } else {
        }
    } catch (e) {
        console.log(e)
    }
}

// const getImageSecondOption =(query)=> {
//     console.log('2')
//     const myHeaders = new Headers();
//     // myHeaders.append('Accept', '*/*');
//     myHeaders.append('Content-Type','application/json')
//     // myHeaders.append('Access-Control-Allow-Origin', '*')
//     // myHeaders.append('Authorization', process.env.API_KEY);
//
//     const myInit = {
//         method: 'GET',
//         headers: myHeaders,
//         mode: 'cors',
//         cache: 'default',
//     };
// const myRequest = new Request(`http://localhost:8080/api/picture?query=${query}`);
// // myRequest.url = `https://api.pexels.com/v1/search?query=${query}`
// //     myRequest.url= `http://localhost:8080/api/picture?query=${query}`
// hello()
// const myImage = document.querySelector('img')
//     const img2Div = document.querySelector('#image-div')
// fetch(myRequest)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//
//         return response;
//     }).then((res)=>res.json())
//     .then((response) => {
//         console.log('3333',response)
//         const container = document.createElement('div');
//         container.classList.add('container-img')
//         const image2 = document.createElement('img');
//         const title = document.createElement('h3');
//         title.innerText = query
//         // image2.src = URL.createObjectURL(response);
//         if(response.src.medium) {
//             image2.src = response.src.medium;
//
//             container.append(image2)
//             container.append(title)
//         }
//         else {
//             title.innerText = "Error - please repeat";
//             container.append(title)
//         }
//         img2Div.append(container)
//
//     });
// }


// const clientVanilla = createClient(process.env.API_KEY);

