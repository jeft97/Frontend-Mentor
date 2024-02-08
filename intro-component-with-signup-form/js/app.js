const formSubmit = document.querySelector(".form");
const allFilds = document.querySelectorAll(".input");
const allIconError = document.querySelectorAll(".js-icon-error");
const allMessageError = document.querySelectorAll(".js-error-message");

function isEmailValid (input){
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return input.value.match(regexEmail) ? true:false;
}

function isPasswordValid (input){
    const regexPassword = /^.{8,}$/;
    return input.value.match(regexPassword) ? true: false;
}

function showError(input, iconError,messageError, textError){

    input.classList.add("u-error-border", "u-a-shakeX");
    iconError.classList.remove("sr-only");
    messageError.classList.remove("sr-only");
    messageError.textContent=`${textError}`;

}

formSubmit.addEventListener("submit", function(e){
    e.preventDefault();


    allFilds.forEach((input, index)=>{

        input.classList.remove("u-error-border","u-a-shakeX");
        allIconError[index].classList.add("sr-only");
        allMessageError[index].classList.add("sr-only");

        if(input.value === ""){

            const label = allMessageError[index].parentElement.firstElementChild.textContent;
            
            showError(input, allIconError[index],allMessageError[index],`${label} cannot be empty`);
            
        
        }else{
            const label = allMessageError[index].parentElement.firstElementChild.getAttribute("for");
            


            if(label.toLocaleLowerCase() === "password"){
                
                if(!isPasswordValid(input)){
                    showError(input, allIconError[index],allMessageError[index],`Please, The Minimum Size Is 8 Characters`);
                }
            }

            if(label.toLocaleLowerCase() === "email"){
                if(!isEmailValid(input)){
                    showError(input, allIconError[index],allMessageError[index],`Incorrect Email Format. Ex: test@example.co`);
                }
            }
            
        }

    });

})