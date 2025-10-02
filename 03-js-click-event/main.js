document.title = 'ini js jir'

const teksAwal = document.getElementById ('teksAwal')
const tombolUbah = document.getElementById ('tombolUbah')

function pengubahTeks(){
    teksAwal.textContent = 'Berhasil berubah';
    console.log('berubah jir asli');
}
tombolUbah.addEventListener('click', pengubahTeks);

