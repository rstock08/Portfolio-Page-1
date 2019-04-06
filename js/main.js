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
    modalColors.style.color = "#000000";
    modalColors.style.background = "#813772";
}
function unhoverModal (modalColors) {
    modalColors.style.color = "#000000";
    modalColors.style.background = "#B82601";
}