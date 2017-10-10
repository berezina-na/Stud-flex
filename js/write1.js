

var formOpen=document.querySelector("btn-adr");
modal=document.querySelector("write-us");
close=document.querySelector("close");
cancel=document.querySelector("cancel");
console.log("Привет");
formOpen.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("write-us-show")});
close.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("write-us-show")});
cancel.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("write-us-show")});