const confirmPass = document.querySelector('#confirmPassword');
const password = document.querySelector('#password');
const success = document.querySelector('#alertSuccess');
const danger = document.querySelector('#alertDanger');

// confirmPass.addEventListener('keyup', myFunction);
// password.addEventListener('keyup', myFunction);

function myFunction(){
    if (confirmPass.value === '' || password.value === '') {
        success.style.display = "none";
        danger.style.display = "none";
    } else if(confirmPass.value === password.value) {
        success.style.display = "block";
        danger.style.display = "none";
    } else if(confirmPass.value !== password.value) {
        danger.style.display = "block";
        success.style.display = "none";
    }
}

