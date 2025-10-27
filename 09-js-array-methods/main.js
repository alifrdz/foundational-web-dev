const items = [
    {id: 1, name: 'Buku Tulis', price:5000},
    {id: 2, name: 'Pensil 2B', price:2000},
    {id: 3, name: 'Penghapus', price:1000},
]

const outputDiv = document.getElementById ('output');

const itemName = items.map ((item) => {
    return item.name;

});
console.log('Array Asli:', items);
console.log('Array Baru (Hasil .map):', itemName)

const outputHtml = itemName.map ((nameHtml) => `<p>${nameHtml}</p>`);

outputDiv.innerHTML = outputHtml.join('');

// filter item Overprice
const itemPricey = items.filter ((item) => {
    return item.price >= 2000;
    
});

console.log('Result Filter (Item >= 2000):', itemPricey);

// reduce total price item 
const totalPrice = items.reduce ((total,item) => {
    return total + item.price;

},0);

console.log ('Total Price', totalPrice);