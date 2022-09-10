const stagesDescriptionConstant = {
    0: "Press the start button to begin",
    1: "Say a Picture subject",
    2: "Say the Text",
    3: "choose Color",
    4: "stage4- position",
}
export default stagesDescriptionConstant

export const commandList = {
    "Continue": "move to next stage ",
    "go back": " move back a stage",
    "Download": "Download the picture",
}

export const instructionsConstant = {
    general:["This website use the Web Speech Api and speech recognition",
        "After you press the 'START' button, speak your commands",
        "You can say 'DOWNLOAD' or press the Download button at any time to download the image to your device",
        "Text to Voice: You can enable text to voice by pressing on voice button in the left menu "
    ],
    steps:[
    "Press the Record button to begin.",
    "Step 1: Say the subject of the picture.",
    "Step 2: (after the image appear) speak the text of the heading.",
    'Step 3: Say the color of the heading ("BLUE","GREEN","RED" etc)or say : "CONTINUE".',
    'Step 4: Say the position of the heading ("TOP","CENTER",BOTTOM.")'
],
commands:['"CONTINUE/NEXT": move to next step','"GO BACK": move to previous step','"DOWNLOAD": download the image']
}
