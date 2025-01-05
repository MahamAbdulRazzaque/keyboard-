
let inputField = document.getElementById('Abtn');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        inputField.value += button.innerText;
    });
});


let inputField1 = document.querySelector('.input');
let removeButton = document.querySelector('.remove-btn');

removeButton.addEventListener('click', function() {
    inputField1.value = " ";    
});
