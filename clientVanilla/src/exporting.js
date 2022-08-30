import html2canvas from 'html2canvas';


export const convertHtmlToCanvas = async () => {
    const imageDiv = document.querySelector('#image-div');
    const text = document.querySelector('#text-div');
    imageDiv.appendChild(text);
    const options = {
        allowTaint: true
    }
    // const captureHtmlToJpg =async ()=> {
    // const response = await html2canvas(imageDiv, options).then(function (canvas) {
    //         return (canvas.toDataURL("image/jpeg", 0.9))
    //     }
    // )
    const newImage = document.createElement('img');

    html2canvas(imageDiv, options).then(function (canvas) {
        document.body.appendChild(canvas);
        newImage.src = canvas.toDataURL();
        // console.log('res',response)
    });
    document.body.appendChild(newImage)
// return response

}


export const downloadImage = async (src) => {
    console.log('4-downloading')
    // const canvas =  document.querySelector('canvas');
    const aTag = document.querySelector('#download-link')
    // const btn = document.querySelector('#download-btn');
    // console.log('imgsrc-', canvas)
    aTag.href = src
    aTag.download = "image.png";
    aTag.click();
    // aTag.setAttribute('href',image.src);
    // btn.click()
}