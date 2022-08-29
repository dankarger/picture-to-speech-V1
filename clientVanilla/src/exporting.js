import html2canvas from 'html2canvas';



const convertHtmlToCanvas = async () => {
    const imageDiv = document.querySelector('#image-div');
    const text = document.querySelector('#text-div');
    imageDiv.appendChild(text);
    const options ={
        allowTaint: true
    }
console.log('2222222222222')
    // const captureHtmlToJpg =async ()=> {
    // const response = await html2canvas(imageDiv, options).then(function (canvas) {
    //         return (canvas.toDataURL("image/jpeg", 0.9))
    //     }
    // )

    html2canvas(imageDiv,options).then(function (canvas) {
        document.body.appendChild(canvas);
        // console.log('res',response)
    });
    const canvas2 = document.querySelector('canvas')
    canvas2.appendChild(text)
// return response

}

export default convertHtmlToCanvas