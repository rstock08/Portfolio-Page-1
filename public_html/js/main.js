/* ==========================================================================
   Reed's custom styles
   ========================================================================== */

// Functions to change home button color/image for rocket
function hover(homeButton, rocketColor) {
  rocketColor.setAttribute("src", "img/Rocket-Launching.png");
  homeButton.style.color = "#66FCF1";
}
function unhover(homeButton, rocketColor) {
  rocketColor.setAttribute("src", "img/Rocket.png");
  homeButton.style.color = "#C5C6C7";
}

// Function to change Resume modal button colors
function hoverModal(modalColors) {
    modalColors.style.color = "#1F2833";
    modalColors.style.background = "#66FCF1";
    modalColors.style.border = "#45A29E";
}
function unhoverModal (modalColors) {
    modalColors.style.color = "#C5C6C7";
    modalColors.style.background = "#45A29E";
    modalColors.style.border = "#45A29E";
}

// Functions to change light bulb color.