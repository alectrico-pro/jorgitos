/**
 * Property of: Rtidy Design & Technologies LLC
 * Updated: Oct 03 2023 with JQuery 3.7.0
 * Author: David Fernandez
 * License: Rtidy Design & Technologies
 */

//***************GLOBAL VARIABLES**********************//
const emailValidationRegEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regEx_txtOnly = /^[a-zA-Z]+[a-zA-z\s]+$/;
const regEx_txt_Numbers_Symbols = /^[A-Za-z0-9\s\-\%\(\)\+\&\.\,\'\"\?\-\#\/]*$/;
const regEx_US_Number = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
const regEx_Date = /^\d{4}-\d{2}-\d{2}$/;
var nameInputReady = false;
var phoneInputReady = false;
var emailInputReady = false;
var messageInputReady = false;
var dateInputReady = false;
//***************ELEMENT ID************************//
var contactFormInputName = $("#name");
var contactFormInputPhone = $("#phone");
var contactFormInputEmail = $("#email");
var contactFormInputText = $("#messageText");
const contactFormInputDate = $("#date");
/////////ALERTS///////////////
const emailStatusAlert = $("#emailAlert");
/////////BUTTONS//////////////
const sendEmailButton = $("#sendEmailButton");

//**************BEGIN EVENTS triggering functions *****************//
contactFormInputName.focusout(function() {validateInput("name", true);});
contactFormInputPhone.focusout(function () {validateInput("phone", true)});
contactFormInputEmail.focusout(function() {validateInput("email", true);});
contactFormInputDate.focusout(function() {validateInput("date", true);});
contactFormInputText.focusout(function() {validateInput("message", true);});
$(`.input-name`).focusout(function() {
    contactFormInputName = $("#cName");
    validateInput("name", false);
});
$('.input-phone').focusout(function() {
    contactFormInputPhone = $("#cPhone");
    validateInput("phone", false);
});
$('.input-email').focusout(function() {
    contactFormInputEmail = $("#cEmail");
    validateInput("email", false);
});
contactFormInputText.keyup(function() {validateInput("message", true);});
$('.input-message').keyup(function() {
    contactFormInputText = $("#cMessage");
    validateInput("message", false);
});
//**************END EVENTS triggering functions *****************//
//**************BEGIN Validation functions *************************//
function validateInput(inputField, appointment){
    var inputTextBox = "";
    var inputValue = "";
    switch(inputField) {
        case "name":
            if ( appointment === false ) dateInputReady = true;
            inputValue = contactFormInputName.val();
            inputTextBox = contactFormInputName;
            if(inputValue === "") {
                nameInputReady = false;
                inputTextBox.removeClass("is-invalid");
                emailStatusAlert.removeClass("text-dark");
                emailStatusAlert.text("");
                emailStatusAlert.hide();
                validateForm();
            }
            if(inputValue){
                if(regEx_txtOnly.test(inputValue) && inputValue.length > 1) {
                    inputTextBox.removeClass("is-invalid");
                    emailStatusAlert.removeClass("text-dark");
                    emailStatusAlert.hide();
                    nameInputReady = true;
                    validateForm();
                }
                else{
                    inputTextBox.removeClass("is-valid");
                    inputTextBox.addClass("is-invalid");
                    if(inputValue.length <=1) {
                        emailStatusAlert.text("The name can't be less than 2 letters");
                        emailStatusAlert.addClass("text-dark");
                        emailStatusAlert.show();
                        nameInputReady = false;
                        validateForm();
                    }
                    else{
                        emailStatusAlert.text("Invalid Entry");
                        emailStatusAlert.addClass("text-dark");
                        emailStatusAlert.show();
                        nameInputReady = false;
                        validateForm();
                    }
                }
            }
            break;
        case "phone":
            if ( appointment === false ) dateInputReady = true;
            inputValue = contactFormInputPhone.val();
            inputTextBox = contactFormInputPhone;
            if(inputValue === "") {
                phoneInputReady = false;
                inputTextBox.removeClass("is-invalid");
                emailStatusAlert.removeClass("text-dark");
                emailStatusAlert.text("");
                emailStatusAlert.hide();
                validateForm();
            }
            if(inputValue){
                if(regEx_US_Number.test(inputValue)) {
                    inputTextBox.removeClass("is-invalid");
                    emailStatusAlert.removeClass("text-dark");
                    emailStatusAlert.hide();
                    phoneInputReady = true;
                    validateForm();
                }
                else{
                    inputTextBox.removeClass("is-valid");
                    inputTextBox.addClass("is-invalid");
                    emailStatusAlert.text("This phone number is not valid...");
                    emailStatusAlert.addClass("text-dark");
                    emailStatusAlert.show();
                    phoneInputReady = false;
                    validateForm();
                }
            }
            break;
        case "email":
            if ( appointment === false ) dateInputReady = true;
            inputValue = contactFormInputEmail.val();
            inputTextBox = contactFormInputEmail;
            if(inputValue === "") {
                emailInputReady = false;
                inputTextBox.removeClass("is-invalid");
                emailStatusAlert.removeClass("text-dark");
                emailStatusAlert.text("");
                emailStatusAlert.hide();
                validateForm();
            }
            if(inputValue){
                if(emailValidationRegEX.test(inputValue)) {
                    inputTextBox.removeClass("is-invalid");
                    emailStatusAlert.removeClass("text-dark");
                    emailStatusAlert.hide();
                    emailInputReady = true;
                    validateForm();
                }
                else{
                    inputTextBox.removeClass("is-valid");
                    inputTextBox.addClass("is-invalid");
                    emailStatusAlert.text("This email is not valid...");
                    emailStatusAlert.addClass("text-dark");
                    emailStatusAlert.show();
                    emailInputReady = false;
                    validateForm();
                }
            }
            break;
        case "message":
            if ( appointment === false ) dateInputReady = true;
            inputValue = contactFormInputText.val();
            inputTextBox = contactFormInputText;
            if(inputValue === "") {
                messageInputReady = false;
                inputTextBox.removeClass("is-invalid");
                emailStatusAlert.removeClass("text-dark");
                emailStatusAlert.text("");
                emailStatusAlert.hide();
                validateForm();
            }
            if(inputValue){
                if(inputValue.length > 5) {
                    inputTextBox.removeClass("is-invalid");
                    emailStatusAlert.removeClass("text-dark");
                    emailStatusAlert.hide();
                    messageInputReady = true;
                    validateForm();
                }
                else{
                    inputTextBox.removeClass("is-valid");
                    inputTextBox.addClass("is-invalid");
                    if(inputValue.length <=5) {
                        emailStatusAlert.text("The subject can't be less than 6 letters");
                        emailStatusAlert.addClass("text-dark");
                        emailStatusAlert.show();
                        messageInputReady = false;
                        validateForm();
                    }
                }
            }
            break;
        case "date":
            inputValue = contactFormInputDate.val();
            inputTextBox = contactFormInputDate;
            if(inputValue === "") {
                dateInputReady = false;
                inputTextBox.removeClass("is-invalid");
                emailStatusAlert.removeClass("text-dark");
                emailStatusAlert.text("");
                emailStatusAlert.hide();
                validateForm();
            }
            if(inputValue){
                if(regEx_Date.test(inputValue) && inputValue.length > 1) {
                    inputTextBox.removeClass("is-invalid");
                    emailStatusAlert.removeClass("text-dark");
                    emailStatusAlert.hide();
                    dateInputReady = true;
                    validateForm();
                }
                else{
                    inputTextBox.removeClass("is-valid");
                    inputTextBox.addClass("is-invalid");
                    if(inputValue.length <=1) {
                        emailStatusAlert.text("The name can't be less than 2 letters");
                        emailStatusAlert.addClass("text-dark");
                        emailStatusAlert.show();
                        dateInputReady = false;
                        validateForm();
                    }
                    else{
                        emailStatusAlert.text("Invalid Entry");
                        emailStatusAlert.addClass("text-dark");
                        emailStatusAlert.show();
                        dateInputReady = false;
                        validateForm();
                    }
                }
            }
            break;
        default:
            break;
    }
}
function validateForm(){
    console.log("En validateForm");

    if((nameInputReady === true) && (phoneInputReady === true) && (dateInputReady === true) && (emailInputReady === true) && (messageInputReady === true)){
        console.log("Pasó la validacioń");
        sendEmailButton.removeAttr("disabled");
        sendEmailButton.css('background-color', '#1acc8d');
    }
    else{
        console.log("No Pasó la validación");
        sendEmailButton.attr("disabled", true);
        sendEmailButton.css('background-color', 'gray');
    }
}
function sendEmail(Type) {
    console.log("En sendEmail")
    if((nameInputReady === false) || (phoneInputReady === false) || (dateInputReady === false) || (emailInputReady === false) || (messageInputReady === false)){
        return false;
    }
    sendEmailButton.attr("disabled", true);
    if ( Type === "Appointment") {
        console.log("En Appointment");
        sendEmailButton.text("Creating appointment...");
        const dateStr = contactFormInputDate.val();
        const [year, month, day] = dateStr.split('-');
        const reformattedDate = `${month}/${day}/${year}`;
        var data = {
            service_id: 'service_l740xsd',
            template_id: 'template_ovsx7id',
            user_id: 'So2s5m2grY3cOzIPJ',
            template_params: {
                'from_name': contactFormInputName.val(),
                'to_name': 'Clinica Mundo Latino Administration Department',
                'reply_to': contactFormInputEmail.val(),
                'date': reformattedDate,
                'phone': contactFormInputPhone.val(),
                'email': contactFormInputEmail.val(),
                'message': contactFormInputText.val()
            }
        };
    }
    else {
        sendEmailButton.text("Sending email...");
        var data = {
            service_id: 'service_l740xsd',
            template_id: 'template_zy27lji',
            user_id: 'So2s5m2grY3cOzIPJ',
            template_params: {
                'from_name': contactFormInputName.val(),
                'to_name': 'Clinica Mundo Latino Administration Department',
                'reply_to': contactFormInputEmail.val(),
                'phone': contactFormInputPhone.val(),
                'email': contactFormInputEmail.val(),
                'message': contactFormInputText.val()
            }
        };
    }
    $.ajax(
        {
           /* url: "https://api.emailjs.com/api/v1.0/email/send", */                 
           /*Adaptado para que funcione con alectrico */
            url: "https://www.alectrico.cl/create_from_jorgitos_landing_page.json",
            type: "POST",
            data: JSON.stringify(data),
            contentType: 'application/json'
        }
    ).done(function(){
        emailStatusAlert.text("Your email has been sent, our team will contact you within 1 business day, thank you!");
        emailStatusAlert.addClass("text-dark");
        emailStatusAlert.css("font-weight","Bold");
        emailStatusAlert.show();
        contactFormInputName.val("");
        contactFormInputName.attr("disabled", true);
        contactFormInputPhone.val("");
        contactFormInputPhone.attr("disabled", true);
        contactFormInputEmail.val("");
        contactFormInputEmail.attr("disabled", true);
        contactFormInputText.val("");
        contactFormInputText.attr("disabled", true);
        sendEmailButton.css('background-color', 'gray');
        sendEmailButton.text("Done.");
        nameInputReady = false;
        phoneInputReady = false;
        emailInputReady = false;
        messageInputReady = false;
        if ( Type === "Appointment") {
            contactFormInputDate.val("");
            dateInputReady = false;
            contactFormInputDate.attr("disabled", true);
        }
    }).fail(function(error){
        emailStatusAlert.text("Oops..." + JSON.stringify(error));
        emailStatusAlert.addClass("text-dark");
        emailStatusAlert.show();
        contactFormInputName.val("");
        contactFormInputName.attr("disabled", true);
        contactFormInputEmail.val("");
        contactFormInputEmail.attr("disabled", true);

        //contactFormInputSubject.val("");
        // contactFormInputSubject.attr("disabled", true);

        contactFormInputText.val("");
        contactFormInputText.attr("disabled", true);
        sendEmailButton.css('background-color', 'gray');
        sendEmailButton.text("Done.");
        nameInputReady = false;
        emailInputReady = false;
        subjectInputReady = false;
        messageInputReady = false;
        if ( Type === "Appointment") {
            contactFormInputDate.val("");
            dateInputReady = false;
            contactFormInputDate.attr("disabled", true);
        }
    })
}
