const form = document.querySelector('[data-form]');

function createVideo(e) {
    e.preventDefault();
    
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const image = document.querySelector('[data-image]').value;
};

form.addEventListener('submit', (e) => createVideo(e));