class imageObject {
    constructor(number, alt) {
        this.number = number;
        this.numberPadded = this.number.toString().padStart(2,'0');
        this.alt = alt;
        this.url = './img/' + this.numberPadded + '.jpg';
        this.srcset = 
            './img/640/'  + this.numberPadded + '.jpg' + ' 640w, '  + 
            './img/1280/' + this.numberPadded + '.jpg' + ' 1280w, ' + 
            './img/1920/' + this.numberPadded + '.jpg' + ' 1920w'
        ;
    }
}

let images = [
    new imageObject(
        1, "alt-oqwiheoiqehwo"
    )
    ,
    new imageObject(
        2, "alt-fwoijfewoij"
    )
    ,
    new imageObject(
        3, "alt-qowiejrqwoij"
    )
    ,
    new imageObject(
        4, "alt-qowiejrqwoij"
    )
    ,
    new imageObject(
        5, "alt-qowiejrqwoij"
    )
    ,
    new imageObject(
        6, "alt-qowiejrqwoij"
    )
];

const thumbnailContainer = document.getElementById('thumbnail-container');
const imageContainer = document.getElementById('image-container');
let currentImage = 0;

images.forEach( function(img, index) {
    const imageElement = document.createElement('img');
    console.log(imageElement);
    imageElement.src = img.url;
    imageElement.srcset = img.srcset;
    imageElement.alt = img.alt;
    imageElement.tabIndex = 0;
    
    imageElement.addEventListener('click', function() {
        changeImage(index);
    });
    imageElement.addEventListener('keydown', function(event) {
        if (event.key == "Enter") {
            changeImage(index);
        }
    })

    thumbnailContainer.appendChild(imageElement);
});

function changeImage(imageIndex) {
    
    imageContainer.style.backgroundImage = 'url(' + images[imageIndex].url + ')';
    imageContainer.style.alt = images[imageIndex].alt;
    if (currentImage != imageIndex) {currentImage = imageIndex};
}
function changeImageForward() {
    if (currentImage >= images.length-1) { return; }
    currentImage += 1;
    changeImage(currentImage);
}
function changeImageBackward() {
    if (currentImage <= 0) { return; }
    currentImage -= 1;
    changeImage(currentImage);
}

document.addEventListener('keyup', function(event) {
    console.log("before: " + currentImage);
    switch (event.key) {
        case 'ArrowLeft':
            changeImageBackward();
            break;
        case "ArrowRight":
            changeImageForward();
            break;
    }
    console.log("after: " + currentImage);
});