/* 
 * Accessible Photo Gallery JavaScript
 * This file contains the functions for the interactive photo gallery
 * with both mouse and keyboard accessibility support
 */

// Function to run when the page loads
function addTabIndex() {
    console.log("Page loaded - Adding tabindex attributes to images");
    
    // Get all elements with class "preview"
    const previewImages = document.querySelectorAll('.preview');
    
    // Loop through each image and add tabindex attribute
    for (let i = 0; i < previewImages.length; i++) {
        previewImages[i].setAttribute('tabindex', '0');
        console.log(`Added tabindex to image ${i+1}`);
    }
}

// Function to update the main image when hovering or focusing on a thumbnail
function upDate(previewPic) {
    // Console log to check that the event is triggering
    console.log("Mouse over or focus event triggered");
    
    // Console log to check the previewPic variable
    console.log("Preview image source:", previewPic.src);
    console.log("Preview image alt text:", previewPic.alt);
    
    // Get the image element
    let imageDiv = document.getElementById("image");
    
    // 1) Change the url for the background image of the div with the id = "image" 
    // to the source file of the preview image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // 2) Change the text of the div with the id = "image" 
    // to the alt text of the preview image
    imageDiv.innerHTML = previewPic.alt;
}

// Function to reset the main image when mouse leaves or focus is removed
function unDo() {
    // Console log to check that the event is triggering
    console.log("Mouse out or blur event triggered");
    
    // Get the image element
    let imageDiv = document.getElementById("image");
    
    // Update the url for the background image of the div with the id = "image" 
    // back to the original value of background-image: url('')
    imageDiv.style.backgroundImage = "url('')";
    
    // Update the text of the div with the id = "image" 
    // back to the original text
    imageDiv.innerHTML = "Hover over or focus on an image below to display here.";
}

// Add event listener for when the page loads
window.onload = addTabIndex;
