

var formOpen = document.querySelector(".btn-adr");
var modal = document.querySelector(".write-us");
var fio=document.querySelector("[name=name]");
var mail=document.querySelector("[name=e-mail]");
var submit=document.querySelector(".send");
var form=document.querySelector(".form-write-us");
var close = document.querySelector(".close");
var error=modal.querySelector("span");
console.log("Привет");

formOpen.addEventListener("click",function(e){
    e.preventDefault();
    modal.classList.toggle("write-us-show");
    fio.focus();
});
close.addEventListener("click",function(e){
    e.preventDefault();
    modal.classList.remove("write-us-show")});
cancel.addEventListener("click",function(e){
    e.preventDefault();
    modal.classList.remove("write-us")});
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!fio.value || !mail.value) {
        error.classList.add("error-name");
    }
    else {

    }
    console.log("я не отправилась");
});
window.addEventListener("keydown",function(e){
    if(evt.keyCode === 27){
modal.classList.remove("write-us");
    }
});
