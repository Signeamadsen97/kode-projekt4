var formSkema = document.querySelector('form');
var fieldsetSkema = formSkema.querySelectorAll('fieldset');
var insendSkema = formSkema.querySelector('button[type="submit"]');

insendSkema.addEventListener("click", (e) => {
    e.preventDefault();

    var fieldsetsValid = true; 

    for (var fieldset of fieldsetSkema) {
        console.log(fieldset);
        var radioSkema = fieldset.querySelectorAll('input[type="radio"]');
        var fieldsetsUdfyldt = false;
        for (var radio of radioSkema) {
            if (radio.checked) {
                fieldsetsUdfyldt = true;
                break;
            }
        }
        if (fieldsetsUdfyldt) {
            for (var radio of radioSkema) {
                radio.style.borderColor = '';
            }
        } else {
            var fieldsetsValid = false; 
            for (var radio of radioSkema) {
                radio.style.borderColor = '#D67A66';
            }
        }
    if (fieldsetsValid) {
        formSkema.submit();
        window.location.href = 'https://creations.mattel.com/';
    }
    }
});