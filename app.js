class imageObject {
  constructor(number, creator, alt) {
    this.number = number;
    this.numberPadded = this.number.toString().padStart(2, "0");
    this.creator = creator;
    this.alt = alt;
    this.url = "./img/" + this.numberPadded + ".jpg";
    this.srcset =
      "./img/640/" +
      this.numberPadded +
      ".jpg" +
      " 640w, " +
      "./img/1280/" +
      this.numberPadded +
      ".jpg" +
      " 1280w, " +
      "./img/1920/" +
      this.numberPadded +
      ".jpg" +
      " 1920w, " +
      "./img/" +
      this.numberPadded +
      ".jpg" +
      " 2000w";
  }
}

let images = [
  new imageObject( 1, "Braulio Espinoza Sánchez", "A sloth is looking at the camera."),
  new imageObject( 2, "Braulio Espinoza Sánchez", "Portrait of a sloth on a tree."),
  new imageObject( 3, "David Gomez", "Brown-Throated sloth hanging upside down, looking at the camera."),
  new imageObject( 4, "Heather Hathaway", "Sloth in Zoo"),
  new imageObject( 5, "Ivy Marie", "Sloth and Branch"),
  new imageObject( 6, "Denys Gromov", "Brown Sloth Hanging on the Metal Bar"),
  new imageObject( 7, "Denys Gromov", "Brown Sloth in Close Up Photography"),
  new imageObject( 8, "Jean Paul Montanaro", "A sloth hanging from a tree branch with its mouth open"),
  new imageObject( 9, "Michael Linares", "A Brown Furry Animal Hanging on Tree Branch"),
  new imageObject(10, "Miguel Cuenca", "Mother and Baby Sloth in Close-up Photography"),
  new imageObject(11, "Osvaldo Madariaga", "Close-up of a Sloth Sitting on a Tree Trunk "),
  new imageObject(12, "Palu Malerba", "Brown Sloth on the Tree"),
  new imageObject(13, "Palu Malerba", "A Sloth on a Tree"),
  new imageObject(14, "Roxanne Minnish", "Portrait of Sloth Hanging Upside Down on Branch"),
  new imageObject(15, "Shuvalova Natalia", "Sloth Hanging on Tree"),
  new imageObject(16, "Steven Paton", "Close up of Sloth"),
  new imageObject(17, "Jay Turner", "Sloth Eating in Wild Nature"),
  new imageObject(18, "Tomáš Malík", "Sloth on Tree"),
  new imageObject(19, "Tomáš Malík", "Sloth Hanging on a Tree"),
  new imageObject(20, "Tomáš Malík", "Sloth Lying on a Pillow")
];

const thumbnailContainer = document.getElementById("thumbnail-container");
const imageContainer = document.getElementById('image-container');
const loadingDiv = document.getElementById('loading');
let currentImage = 0;

images.forEach(function (img, index) {
  const imageElement = document.createElement("img");
  console.log(imageElement);
  imageElement.src = img.url;
  imageElement.srcset = img.srcset;
  imageElement.alt = img.alt;
  imageElement.ariaLabel = `Image ${img.number} by ${img.author}: press enter to load`;
  imageElement.tabIndex = 0;

  imageElement.addEventListener("click", function () {
    changeImage(index);
  });
  imageElement.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      changeImage(index);
    }
  });

  thumbnailContainer.appendChild(imageElement);
});

function changeImage(imageIndex) {
  imageContainer.src = images[imageIndex].url;
  imageContainer.srcset = images[imageIndex].srcset;
  imageContainer.alt = images[imageIndex].alt;
  if (currentImage != imageIndex) {
    currentImage = imageIndex;
  }
}
function changeImageForward() {
  if (currentImage >= images.length - 1) {
    return;
  }
  currentImage += 1;
  changeImage(currentImage);
}
function changeImageBackward() {
  if (currentImage <= 0) {
    return;
  }
  currentImage -= 1;
  changeImage(currentImage);
}

document.addEventListener("keyup", function (event) {
  console.log("before: " + currentImage);
  switch (event.key) {
    case "ArrowLeft":
      changeImageBackward();
      break;
    case "ArrowRight":
      changeImageForward();
      break;
  }
  console.log("after: " + currentImage);
});

// don't load image elements until page finished loading (to prevent displaying stretched images)
document.addEventListener('DOMContentLoaded', function () {
  imageContainer.style.display = "block";
  thumbnailContainer.style.display = "flex";
  loadingDiv.style.display = "none";
})

// horizontal scroll for thumbnails
thumbnailContainer.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    thumbnailContainer.scrollLeft += 100;
    event.preventDefault();
  }
  else {
    thumbnailContainer.scrollLeft -= 100;
    event.preventDefault();
  }
});