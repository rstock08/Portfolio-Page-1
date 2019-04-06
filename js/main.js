/* ==========================================================================
   Reed's custom styles
   ========================================================================== */

/*
Color Scheme:

Black: #000000
INK: #062F4F
POSY: #813772
EMBERS: #B82601
*/

// Functions to change image color for logo
function hover(logoColor) {
  logoColor.setAttribute("src", "img/icon/INK.png");
}
function unhover(logoColor) {
  logoColor.setAttribute("src", "img/icon/BLACK.png");
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