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

// Functions to change light bulb color.