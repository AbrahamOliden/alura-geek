import { apiConnection } from "./API-connection.js";

const list = document.querySelector('[data-list]');

function createCard() {
    const card = document.createElement('li');
    card.className = 'output__list__item';
    card.innerHTML = `
    <div class="output__list__item__container">
        <img src="../assets/Stormtrooper.png" alt="producto"/>
        <p class="output__list__item__container__p" >Stormtrooper</p>

        <div class="output__list__item__container__container">
            <p class="output__list__item__container__container__p">$60.00</p>
            <i class="fa-solid fa-trash"></i>
        </div>
                            
    </div>
    `;

    return card;
};

async function listItems() {
    const API_list = apiConnection.itemsList();
};