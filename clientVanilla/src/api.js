// import axios from 'axios';
//
// let myUrl = 'http://localhost:8080/api'; //development
//
// if (process.env.NODE_ENV === 'production') {
//     myUrl = '';
// }
// // if (process.env.NODE_ENV === 'development') {
// //     // console.log('propcc',process.env.NODE_ENV)
// // }
//
// export default axios.create({
//     baseURL: myUrl
// });

// export default hello
const subjects = ['sea','animals','people','cat','nature','city','fiction','transportation','birds','Group of people working','factory']

const getImageSecondOption = (query, isRandom) => {
    let queryResult = query
    console.log('2')
    if(isRandom===true) {
        const randomIndex = Math.floor(Math.random()*subjects.length)
        queryResult= subjects[randomIndex]
    }
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
    const myRequest = new Request(`http://localhost:8080/api/picture?query=${queryResult}`);
// myRequest.url = `https://api.pexels.com/v1/search?query=${query}`
//     myRequest.url= `http://localhost:8080/api/picture?query=${query}`

    const myImage = document.querySelector('img')
    const img2Div = document.querySelector('#image-div')
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
            const title = document.createElement('h3');
            title.innerText = query
            // image2.src = URL.createObjectURL(response);
            if (response[0].src.medium) {
                image2.src = response[0].src.medium;

                container.append(image2)
                container.append(title)
            } else {
                title.innerText = "Error - please repeat";
                container.append(title)
            }
            img2Div.append(container)

        });
}

export default getImageSecondOption