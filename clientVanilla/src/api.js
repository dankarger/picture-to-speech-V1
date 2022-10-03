import axios from 'axios';

// let myUrl = 'http://localhost:8080/api/picture'; //development
let myUrl = '/api/picture';


if (process.env.NODE_ENV === 'production') {
    myUrl = '/api/picture';
}
// if (process.env.NODE_ENV === 'development') {
//     // console.log('propcc',process.env.NODE_ENV)
// }

 axios.create({
    baseURL: myUrl
});

// export default hello


const getImageSecondOption = (query) => {
    const myHeaders = new Headers();
    // myHeaders.append('Accept', '*/*');
    myHeaders.append('Content-Type', 'application/json')
    // myHeaders.append('Access-Control-Allow-Origin', '*')
    // myHeaders.append('Authorization', process.env.API_KEY);

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
    };
    const myRequest = new Request(`${myUrl}?query=${query}`);
    console.log('request',myRequest)



    const img2Div = document.querySelector('#image-div')
    const pictureTitle = document.querySelector('.picture-title')
    fetch(myRequest)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response;
        }).then((res) => res.json())
        .then((response) => {
            const container = document.createElement('div');
            container.classList.add('container-img')
            const image2 = document.createElement('img');
            image2.id = 'currentImage';
            const title = document.createElement('h3');
            const photographer = document.createElement('a');
            const credits = document.createElement('span');
            title.innerText = `Title : ${query}`;
            title.id = 'title-id';
            console.log('r',response[0])
            credits.textContent = `Photographer: `;
            photographer.textContent = response[0].photographer;
            credits.appendChild(photographer)
            credits.classList.add('credits');
            photographer.href = response[0].photographer_url;
            photographer.target = '_blank';
            // image2.src = URL.createObjectURL(response);
            if (response[0].src.medium) {
                image2.src = response[0].src.medium;

                container.append(image2)
                // container.append(title)  // to use in future game

                pictureTitle.appendChild(title)
                pictureTitle.appendChild(credits)
            } else {
                title.innerText = "Error - please repeat";
                pictureTitle.appendChild(title)
                // container.append(title) // to use in future game
            }
            img2Div.append(container)

        });
}

export default getImageSecondOption;

