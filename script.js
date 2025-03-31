// Ambil semua tombol diamond
    const diamondButtons = document.querySelectorAll('.diamond-btn');

    // Tambahkan event listener ke setiap tombol
    diamondButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Hapus kelas aktif dari semua tombol
            diamondButtons.forEach(button => button.classList.remove('selected'));
            
            // Tambahkan kelas 'selected' pada tombol yang diklik
            e.target.classList.add('selected');
        });
    });

// Ambil tombol "Dapatkan Diamond", pesan, dan elemen login
const getDiamondButton = document.getElementById('get-diamond');
const diamondMessage = document.getElementById('diamond-message');
const loginOptions = document.getElementById('login-options');

// Menambahkan event listener untuk klik tombol "Dapatkan Diamond"
getDiamondButton.addEventListener('click', function() {
    // Menampilkan pesan untuk login
    diamondMessage.style.display = 'block';

    // Menampilkan opsi login Facebook dan Google
    loginOptions.style.display = 'block';
});