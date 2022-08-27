// const Api = require('./api')
// import { createClient } from '../node_modules/pexels';
// import { createClient } from '../pexels';

// import Api from "./Api";
// import myApi from "./api.js";
import path from 'path'
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
import dotenv from './dotenv'
dotenv.config({ path: path.resolve(__dirname, '../.env') })
const searchForm = document.querySelector("#search-form");
const searchFormatInput  = searchForm.querySelector("input");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

if (SpeechRecognition) {
    console.log("browser support");

    searchForm.insertAdjacentHTML("beforeend",'          <button type="button" class="icon mic-off">MIC ICON</button>\n')
    const micBtn = searchForm.querySelector("button");
    const micIcon = searchForm.querySelector(".icon");

    const recognition = new SpeechRecognition();
    recognition.continuous = true ;
    // recognition.lang = "he"

    console.log('lng',SpeechRecognition.lang)
    micBtn.addEventListener('click',micBtnClick);
    function micBtnClick() {
        if(micIcon.classList.contains('mic-off')){
            recognition.start();
        }
        else {

            recognition.stop();
        }
    }
    recognition.addEventListener("start", startSpeechRecognition);// <=> recognition.onstart = function(){...}
    function startSpeechRecognition(){
        micIcon.classList.remove('mic-off');
        micIcon.classList.add('mic-on');
        searchFormatInput.focus();
        console.log("Speech Recognition Active")
    }
    recognition.addEventListener("end", endSpeechRecognition);// <=> recognition.onend = function(){...}
    function endSpeechRecognition(){
        micIcon.classList.remove('mic-on');
        micIcon.classList.add('mic-off');
        searchFormatInput.focus();
        console.log("Speech Recognition Disconnected")
    }

    recognition.addEventListener("result",resultOfSpeechRecognition);// <=> recognition.onresult = function(){...}
    function resultOfSpeechRecognition(event){
        console.log(event);
        const currentResult = event.resultIndex
        const transcript = event.results[currentResult][0].transcript
        // searchFormatInput.value = transcript;

        if(transcript.toLowerCase().trim()==='stop recording') {
            recognition.stop()
        }
        else if(!searchFormatInput.value) {
            searchFormatInput.value = transcript
        }
        else {
            if(transcript.toLowerCase().trim()==='go') {
                searchForm.action = `https://unsplash.com/s/photos/${transcript}`
                getImageSecondOption(transcript)
                searchForm.submit()
            }
            else if(transcript.toLowerCase().trim()==='reset input') {
                searchFormatInput.value = '';
            }
            else {
                searchFormatInput.value = transcript
            }
        }
        // setTimeout(()=>{
        //     searchForm.submit();
        // },750)
    }
}
else {
    console.log("browser dont support")
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
const getImageSecondOption =(query)=> {

    const myHeaders = new Headers();
    myHeaders.append('Accept', 'image/jpeg');
    myHeaders.append('Authorization', process.env.API_KEY);

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
    };
const myRequest = new Request(query);
myRequest.url = `https://api.pexels.com/v1/search?query=${query}`
const myImage = document.querySelector('img')
fetch(myRequest)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.blob();
    })
    .then((response) => {
        myImage.src = URL.createObjectURL(response);
    });
}


// const client = createClient(process.env.API_KEY);

