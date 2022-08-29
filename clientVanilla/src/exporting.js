import html2canvas from 'html2canvas';

const imageDiv = document.querySelector('#image-div');

const convertHtmlToCanvas = async () => {
console.log('2222222222222')
    // const captureHtmlToJpg =async ()=> {
    const response = await html2canvas(imageDiv).then(function (canvas) {
            return (canvas.toDataURL("image/jpeg", 0.9))
        }
    )

    // html2canvas(imageDiv).then(function (canvas) {
    //     document.body.appendChild(canvas);
    //     console.log('res',response)
    // });
return response

}

export default convertHtmlToCanvas