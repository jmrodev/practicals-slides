async function getProductos() {
    const url = "https://62a91248ec36bf40bdb26d69.mockapi.io/productos";
    const lista = document.querySelector("#lista");
    lista.innerHTML = "";

    try {
        const res = await fetch(url); //get url
        const json = await res.json(); // txtjson a object
        for (const producto of json) {
            const { nombre, precio, imagen, marca } = producto;

            lista.innerHTML += `
    <div class="card">
            <img src="${imagen}" alt="Card image cap">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${marca}</p>
            <p class="text-price">${precio}</p>
            </div>
            `;
        }
    } catch (error) {
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", getProductos);
