import { apiConnection } from "./API-connection.js";

const form = document.querySelector('[data-form]');

async function newCard(e) {
    e.preventDefault();
    
    const image = document.querySelector('[data-image]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;

    await apiConnection.sendVideo(image, name, price);
};

form.addEventListener('submit', (e) => newCard(e));