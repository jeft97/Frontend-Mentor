
const labalErrorMessage = document.querySelector(".js-error-message");
const inputEmail = document.querySelector(".js-form__input");
const form = document.querySelector(".form");

function isEmailValid(inputText){
    const ragexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    if(inputText.value.match(ragexEmail)) return true;
    return false;
}


inputEmail.focus();

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(!isEmailValid(inputEmail)){
        labalErrorMessage.classList.remove("sr-only");
        inputEmail.classList.add("input__error");
        inputEmail.focus();
        return;
    }
    labalErrorMessage.classList.add("sr-only");
    inputEmail.classList.remove("input__error");
})


