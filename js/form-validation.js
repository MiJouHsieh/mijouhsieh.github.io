'use strict'
const form = document.querySelector('#form');
const userName = document.querySelector('#userName');
const userPhone = document.querySelector('#userPhone')
const userEmail = document.querySelector('#userEmail')
const userMessage = document.querySelector('#userMessage')
const submitButton = document.querySelector('#submit-button')
const btnText = document.querySelector('#btnText')
const formRowContainer = document.querySelector('.form-row-container')

// Set Error Message
function setError(input, errormsg) {
    const validationContainer = input.parentElement;
    const validation = validationContainer.querySelector(".validation");
    validationContainer.className = "validation-container error";
    validation.innerText = errormsg;
}

// Set Success Message
function setSuccess(input) {
    const validationContainer = input.parentElement;
    validationContainer.className = "validation-container success";
}
function validName(input) {
    const regexName = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/
    if (regexName.test(input.value.trim())) {
        setSuccess(input);
    } else {
        setError(input, "Your name is not valid");
    }
}
// check tel is valid
function validTel(input) {
    const regexTel = /^[\+]?[(]?[0]{1}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/im
    if (regexTel.test(input.value.trim())) {
        setSuccess(input)
    } else {
        setError(input, 'Phone number is not valid');
    }
}

//check email is valid
function validEmail(input) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(input.value.trim())) {
        setSuccess(input)
    } else {
        setError(input, 'Email is not invalid');
    }
}
function validMessage(input) {
    if (userMessage.value.trim()) {
        setSuccess(input);
    } else {
    setError(input, "Message can't be blank");
    }
}

//checkRequired fields //!!!IMPORTANT
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            setError(input, `${getFieldName(input)} is required`)
        } else {
            setSuccess(input);
        }
    })
}
function validForm(inputArr) {
    let n = 0
    inputArr.forEach(function (input) {
        const validationContainer = input.parentElement;
        if (validationContainer.classList.contains("success")) {
            n++
        }
    })
    if (n === 4) {
        formRowContainer.classList.add('submitted');
        btnText.innerHTML = 'Thanks';
        submitButton.classList.add('submitButton-active');
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([userName, userPhone, userEmail, userMessage]);
    validName(userName)
    validTel(userPhone);
    validEmail(userEmail);
    validForm([userName, userPhone, userEmail, userMessage])
});

// footer 訂閱電子報驗證
function validationNewsletter() {
    const newsletterForm = document.querySelector('#newsletterForm');
    const newsletterInput = document.querySelector('#newsletter').value.trim()
    const newsletterMsg = document.querySelector("#newsletterMsg");
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const modalContainer = document.querySelector(".modal-container")
    const popBtn = document.querySelector(".pop-btn")
    const X = document.querySelector(".x")

    function appear(event) {
        modalContainer.style.visibility = "visible";
        newsletterMsg.style.visibility = "hidden";
        event.preventDefault()
        document.querySelector('#newsletter').value=""
        popBtn.style.visibility = "hidden";
    }
    function disappearX() {
        if (newsletterInput.match(pattern)) {
            modalContainer.style.visibility = "hidden";
        }
    }
    function disappearModalContainer(e) {
        if (newsletterInput.match(pattern)) {
            if (e.target.className === "modal-container") {
                modalContainer.style.visibility = "hidden";
            }
        }
    }
    function validateMailPattern() {
        const newsletterSpace = document.querySelector('#newsletter')
        if (newsletterInput === "") {
            newsletterForm.classList.remove("valid");
            newsletterForm.classList.remove("invalid");
            newsletterMsg.innerHTML = "";
            modalContainer.style.visibility = "hidden";
            
            newsletterSpace.addEventListener("keypress", function(event) {
                if(event.keyCode === 13) { 
                    event.preventDefault()
                    return 
                }
            })
            
        } else if (newsletterInput.match(pattern)) {
            newsletterForm.classList.add("valid");
            newsletterForm.classList.remove("invalid");
            newsletterMsg.style.visibility = "visible";
            newsletterMsg.innerHTML = "Your Email Address is valid &#10003;";
            newsletterMsg.style.color = "#00ff00";
            popBtn.style.visibility = "visible";
            
            newsletterSpace.addEventListener("keypress", function(event) {
                if(event.keyCode === 13) { 
                    event.preventDefault()
                    appear(event)
                }
            })
        } else {
            newsletterForm.classList.remove("valid");
            newsletterForm.classList.add("invalid");
            newsletterMsg.style.visibility = "visible";
            newsletterMsg.innerHTML = "Please enter valid Email Address";
            newsletterMsg.style.color = "#ff0000";
            popBtn.style.visibility = "hidden";
            
            newsletterSpace.addEventListener("keypress", function(event) {
                if(event.keyCode === 13) { 
                    event.preventDefault()
                }
            })
        } 
        
    }
    validateMailPattern()
    popBtn.addEventListener("click", appear);
    X.addEventListener("click", disappearX);
    modalContainer.addEventListener("click", disappearModalContainer)
}