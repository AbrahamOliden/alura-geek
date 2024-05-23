import { apiConnection } from "./API-connection.js";

document.addEventListener(
    'DOMContentLoaded',
    async () => {
        await apiConnection.itemsList();
        const deleteButtons = document.querySelectorAll('.delete-button');

        console.log(deleteButtons);
        async function removeCard(button) {
            const id = parseInt(button.dataset.id);
            console.log(id);
            await apiConnection.deleteCard(id);
        };

        deleteButtons.forEach((button) => {
            button.addEventListener('click', () => removeCard(button));
        });
    }
);