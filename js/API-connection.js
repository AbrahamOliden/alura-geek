async function itemsList() {
    const connection = await fetch('http://localhost:3001/products');
    const parsedConnection = connection.json()

    console.log(parsedConnection);
}

itemsList();