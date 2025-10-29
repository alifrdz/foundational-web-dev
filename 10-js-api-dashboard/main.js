const productList = document.getElementById ('product-list');
const stats = document.getElementById ('stats');
const totalValue = document.getElementById ('total-value');

// fetch
async function fetchDataAPI(params) {
    console.log('Fetching data, please wait');
    
    try {
        const response = await fetch ('https://fakestoreapi.com/products');

        const data = await response.json();

        renderProducts(data);
        calculateProducts(data);
        console.log(data);
    } catch (error){
        console.log ('failed', error);

    }
}

fetchDataAPI();

function renderProducts(products){
    const htmlArray = products.map (product => {
        return `
        <div class="product">
        <p>${product.title}</p>
        <p>Price ${product.price}</p>
        </div>
        `;
    });

    const htmlString = htmlArray.join ('');

    productList.innerHTML = htmlString;

}

function calculateProducts (products){
     const total = products.reduce( (accumulator, currentItem) => {
        return accumulator+currentItem.price;
    },0);
    
    totalValue.innerHTML = `${total.toFixed(2)}`;
}