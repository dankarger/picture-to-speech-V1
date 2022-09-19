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
            title.innerText = ` picture title: \n${query}`;
            title.id = 'title-id';
            // image2.src = URL.createObjectURL(response);
            if (response[0].src.medium) {
                image2.src = response[0].src.medium;

                container.append(image2)
                // container.append(title)  // to use in future game
                pictureTitle.appendChild(title)
            } else {
                title.innerText = "Error - please repeat";
                pictureTitle.appendChild(title)
                // container.append(title) // to use in future game
            }
            img2Div.append(container)

        });
}

export default getImageSecondOption;

