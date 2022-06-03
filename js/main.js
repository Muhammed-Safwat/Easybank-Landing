let OPEN = document.querySelector( '.open' );
let CLOSE = document.querySelector( '.close' );
let MENU = document.querySelector( '.header .links ul' );
let LINK = document.querySelector( '.header .links ul li' );
let SCROLL = document.querySelector( '.no_scroll' );
let overlay = document.querySelector( ".overlay" );

function showMenu(){
    MENU.style.display = "flex";
    CLOSE.style.display = "block";
    OPEN.style.display = "none";
    SCROLL.style.overflowY = "hidden";
    overlay.style.width = "100%";
}
function hideMenu()
{
        CLOSE.style.display = "none";
        OPEN.style.display = "block";
        MENU.style.display = "none";
        overlay.style.width = "0%";
        SCROLL.style.overflowY = "auto";
}
