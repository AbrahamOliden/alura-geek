async function itemsList() {
    const connection = await fetch('http://localhost:3001/products');

    console.log(connection);
}

itemsList();