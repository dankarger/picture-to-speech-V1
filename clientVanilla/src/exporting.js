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

    html2canvas(imageDiv, options).then(function (canvas) {
        document.body.appendChild(canvas);
        // console.log('res',response)
    });

// return response

}


export const downloadImage = async () => {
    console.log('4-downloading')
    const canvas =  document.querySelector('canvas');
    const aTag = document.querySelector('#download-link')
    const btn = document.querySelector('#download-btn');
    console.log('imgsrc-', canvas)
    // aTag.href =  canvas.toDataURL()
    // aTag.download = "image.png";
    // aTag.click();
    // aTag.setAttribute('href',image.src);
    // btn.click()
}