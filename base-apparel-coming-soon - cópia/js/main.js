const labelErrorName = document.querySelector(".js-error-message");
const iconError = document.querySelector(".js-icon-error");
const inputFilds = document.querySelector(".input");
const formSubmit = document.querySelector(".form");


function checkEmail(input) {
    const ragexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm; 
   return input.value.match(ragexEmail) ? true : false;
}


formSubmit.addEventListener("submit", function(e){
    e.preventDefault();

    if(!checkEmail(inputFilds)){
     
        labelErrorName.classList.remove("sr-only");
        iconError.classList.remove("sr-only");
        labelErrorName.textContent =`Please, provide a valid email`;
        return;
    }

    labelErrorName.classList.add("sr-only");
    iconError.classList.add("sr-only");

});