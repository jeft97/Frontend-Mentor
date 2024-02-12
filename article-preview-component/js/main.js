const btnShare = document.querySelector(".js-button-share");
const shareContainer = document.querySelector(".js-share");
const iconShare = document.querySelector(".js-icon-share");

function isDesktop(){
    return window.matchMedia("(min-width:1280px)").matches
}



btnShare.addEventListener("click", function(){
  
    shareContainer.classList.toggle("sr-only");
    this.classList.toggle("button--active");
    iconShare.classList.toggle("icon--share-active");

    if(!isDesktop()){
        this.classList.toggle("button--active-transform");
        return
    }
  
});