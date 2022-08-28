import React from "react";
import './SearchForm.css'



const SearchForm =()=>{

    // const speechRecognistionFunc = ()=>{
    //     const SpeechRecognition = window.SpeechRecognition() || window.webkitSpeechRecognition
    //     const recognition = new SpeechRecognition();
    // }


    return(
        <div>
            <form action="https://unsplash.com/s/photos" method="get" id="search-form">
                         {/*<label for="firstInput">Speak or Type</label> */}
                <input id="firstInput" type="text" name="q" placeholder="search Google" autoComplete="false" autoFocus />
                         {/*<button type="submit">submit</button>*/}
            </form>
        </div>
    )
}

export default SearchForm