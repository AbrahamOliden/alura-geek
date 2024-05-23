const clearButton = document.querySelector('.input__form__button-container__clear');

const inputs = document.querySelectorAll('.input__form__field');

clearButton.addEventListener('click', () => clearInputs());

function clearInputs() {
    inputs.forEach( (input) => input.value = '' );
    console.log(inputs);
};