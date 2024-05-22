async function itemsList() {
    const connection = await fetch('http://localhost:3001/products');
    const parsedConnection = connection.json();

    return parsedConnection;
};

async function sendCard(image, name, price) {
    const connection = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            image: image,
            name: name,
            price: price
        })
    });

    const parsedConnection = connection.json();
    return parsedConnection;
};

async function deleteCard(id) {
    const connection = await fetch('http://localhost:3001/products', {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            id: id
        })
    });

    const parsedConnection = connection.json;
    return parsedConnection;
};

export const apiConnection = {
    itemsList, sendCard, deleteCard
}