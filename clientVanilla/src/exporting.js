import html2canvas from 'html2canvas';


export const convertHtmlToCanvas = async () => {
    const container = document.querySelector('.results-container')
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
    newImage.id = 'img-id';
    newImage.crossOrigin = 'anonymous';
    // const response = html2canvas(imageDiv, options).then(function (canvas) {
    //     container.appendChild(canvas);
    //     newImage.src = canvas.toDataURL(); /// ?
    //     container.appendChild(newImage)
    //
    //     // console.log('res',response)
    // });

    const response =  html2canvas(imageDiv, { useCORS:true}).then(function (canvas){
        const imgBase64 = canvas.toDataURL();
        // console.log("imgBase64:", imgBase64);
        const imgURL = "data:image/" + imgBase64;
        // const triggerDownload = $("<a>").attr("href", imgURL).attr("download", "layout_"+new Date().getTime()+".jpeg").appendTo("body");
        const triggerDownload =  document.querySelector('#download-link')
        triggerDownload.href = imgURL
        triggerDownload.download =  "image.png";
        triggerDownload.click();
        canvas.style.width = '100%';
        const newImage = document.createElement('img');
        newImage.src = imgBase64
        container.appendChild(newImage)
        // container.appendChild(canvas)

        triggerDownload.remove();
    });


    // document.body.appendChild(newImage)
    return response

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