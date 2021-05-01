const form = document.querySelector(".container .right .form-box");
const controls = document.querySelectorAll(".container .right .form-box .form-control");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    controls.forEach((control)=>{
        var input = control.querySelector("input");
        if(!input.value){
            control.classList.add("error");
        }else {
            control.classList.remove("error");

            if(input.type == "email"){
                if(validateEmail(input.value)){
                    control.classList.remove("error");
                }else{
                    control.classList.remove("error");
                }
            }
        }
    });
});


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}