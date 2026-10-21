// 1. Pilih tombol berdasarkan ID-nya (pastikan sama persis dengan HTML: sapabutton)
const tombolSapa = document.getElementById('sapabutton');

// 2. Tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListener('click', function() {
  // 3. Jalankan kode ini ketika tombol di-klik
  alert('Halo! Terima kasih sudah berkunjung!');
});
