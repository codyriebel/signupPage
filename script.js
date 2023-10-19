const confirm = document.querySelector('#confirm');
confirm.addEventListener('focusout', checkPass);

const errorMessage = document.querySelector('.error');

function checkPass() {

    const pass = document.querySelector("#pass");
    const confirmed = document.querySelector('#confirm');

    if (pass.value !== confirmed.value) {
        pass.classList.add('invalid');
        confirmed.classList.add('invalid');
        errorMessage.style.visibility = 'visible';

    } else if (pass.classList.contains('invalid')) {
        pass.classList.remove('invalid');
        confirmed.classList.remove('invalid');
        errorMessage.style.visibility = 'hidden';
    }
}
