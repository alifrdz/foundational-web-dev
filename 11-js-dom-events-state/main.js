const searchContainer = document.querySelector ('.search-container');
const searchBox = document.getElementById ('search-box');
const productListContainer = document.getElementById ('product-list-container');

let allProducts = [];

async function fetchProducts(params) {
    console.log ('Fetching products ....');

    try {
        const response = await fetch ('https://fakestoreapi.com/products');
        const data = await response.json ();

        allProducts = data;

        renderProducts (allProducts);
    } catch (error) {
        console.log ('Failed to fetch products',error);
    }
}

function renderProducts (productsToDisplay){
    const htmlArray = productsToDisplay.map (product => {
        return `
        <div class="product">
        <p>${product.title}</p>
        <p>$${product.price.toFixed(2)}</p>
        </div>
        `;
    });
    
    if (htmlArray.length === 0){
        productListContainer.innerHTML = '<p>no product found.</p>';
    } else {
        productListContainer.innerHTML = htmlArray.join ('');
    }
    
}

function handleSearch (){

    const searchItem = searchBox.value.toLowerCase().trim ();
    const filteredProducts = allProducts.filter ((product) => {
        return product.title.toLowerCase().includes(searchItem);
    });
    renderProducts(filteredProducts);
}
fetchProducts();
searchBox.addEventListener ('input', handleSearch);