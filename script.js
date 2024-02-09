// Array of image links
const arrayImg = [
    'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

let currImgIndex = 0;
const img = document.getElementById('imgView');

// Function to display the current image
function currImgDisplay() {
    img.src = arrayImg[currImgIndex];
}

// Function to show the previous image
function previousImg() {
    currImgIndex = (currImgIndex - 1 + arrayImg.length) % arrayImg.length;
    currImgDisplay();
}

// Function to show the next image
function nextImg() {
    currImgIndex = (currImgIndex + 1) % arrayImg.length;
    currImgDisplay();
}

// Initial display of the first image
currImgDisplay();