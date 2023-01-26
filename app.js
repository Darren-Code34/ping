const form = document.querySelector('.form-container');
const email = document.querySelector('.email');


function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function validate(e){
    e.preventDefault();
    
    if(email.value ===""){
        const message = document.createElement('p');
        message.textContent = "Whoops! It looks like you forgot to add your email";
        message.style.fontSize = "14px";
        message.style.color = "hsl(223, 87%, 63%)";
        message.style.display = "block";
        form.appendChild(message);
        setTimeout(()=>{
            message.style.display = "none";
        },3000)
    }

    else if(checkEmail(email.value)){
        const message = document.createElement('p');
        message.textContent = "your email has been submitted";
        message.style.fontSize = "14px"
        message.style.color = "hsl(120, 100%, 25%)";
        message.style.display = "block";
        form.appendChild(message);
        setTimeout(()=>{
            message.style.display = "none";
        },3000)
    }else if(!checkEmail(email.value)){
        const message = document.createElement('p');
        message.textContent = "Please provide a valid email address";
        message.style.fontSize = "14px"
        message.style.color = "hsl(0,100%,50%)";
        message.style.display = "block";
        form.appendChild(message);
        setTimeout(()=>{
            message.style.display = "none";
        },3000)
    }

    email.value ="";
}

form.addEventListener('submit', validate);
