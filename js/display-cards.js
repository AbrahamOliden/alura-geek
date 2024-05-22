import { apiConnection } from "./API-connection.js";

const list = document.querySelector('[data-list]');

function createCard(image, name, price, id) {
    const card = document.createElement('li');
    card.className = 'output__list__item';
    card.innerHTML = `
    <div class="output__list__item__container">
        <img src=${image} class="item-image" alt="producto"/>
        <p class="output__list__item__container__p" >${name}</p>

        <div class="output__list__item__container__container">
            <p class="output__list__item__container__container__p">${price}</p>
            <button class="delete-button" data-id=${id}>
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
                            
    </div>
    `;

    return card;
};

async function listItems() {
    const apiList = await apiConnection.itemsList();

    apiList.forEach((video) => {
        list.appendChild( createCard( video.image, video.name, video.price, video.id ) );
    });
};

listItems()