const getDataButton = document.getElementById ('get-data-button');
const dataContainer= document.querySelector ('.data-container');

// fetch = mengambil === jadi artinya mengambil data ///
async function fetchData() {
    console.log ('tombol diklik, function dipanggil');
    getDataButton.textContent = 'loading woii';

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const user = await response.json();

        console.log('Data berhasil gw ambil coy', user);

        // wajib untuk hapus data lama biar ga numpuk
         dataContainer.innerHTML = '';

         user.forEach(user => {
            const userElement = document.createElement ('p');

            userElement.textContent = `Nama: ${user.name}, Email: ${user.email}`;

            dataContainer.append (userElement);

         });
        } catch (error) {
            console.log ('Error cuy data lu');
        }
     
}


getDataButton.addEventListener ('click', fetchData)