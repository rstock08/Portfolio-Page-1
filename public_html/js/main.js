/* ==========================================================================
   Reed's custom styles
   ========================================================================== */

/*
Color Scheme:

Black: #0B0C10 
Navy Blue: #1F2833 
Grey: #C5C6C7 
Teal: #66FCF1 
Dark Teal: #45A29E
*/

// Functions to change home button color/image for rocket
function hover(homeButton, rocketColor) {
  rocketColor.setAttribute("src", "img/animation/Rocket-Launching.png");
  homeButton.style.color = "#66FCF1";
}
function unhover(homeButton, rocketColor) {
  rocketColor.setAttribute("src", "img/animation/Rocket.png");
  homeButton.style.color = "#C5C6C7";
}

// Function to change Resume modal button colors
function hoverModal(modalColors) {
    modalColors.style.color = "#1F2833";
    modalColors.style.background = "#66FCF1";
}
function unhoverModal (modalColors) {
    modalColors.style.color = "#C5C6C7";
    modalColors.style.background = "#45A29E";
}