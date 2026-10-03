**2. Jelaskan perbedaan Flexbox dan Grid, lalu berikan satu contoh bagian halaman produk Anda yang tepat untuk masing-masing.**

Flexbox menata elemen dalam satu dimensi (hanya baris atau kolom saja), sedangkan Grid menata elemen dalam dua dimensi (baris dan kolom sekaligus).

Contoh pada produk:

Flexbox: Tombol navigasi slide (Previous & Next) di <header> yang berjajar horizontal dalam satu baris.
Grid: Kartu spesifikasi hardware di <main> yang tersusun 1 kolom di ponsel dan 2 kolom di desktop.

**3. Jelaskan makna pendekatan mobile-first pada Tailwind CSS dan arti kelas grid-cols-1 md:grid-cols-2.**

Mobile-first berarti kelas tanpa prefix berlaku untuk layar terkecil (ponsel) terlebih dahulu, lalu kelas berprefix breakpoint (md:, lg:) menimpa gaya untuk layar yang lebih besar.

grid-cols-1: default di ponsel, elemen tersusun 1 kolom.
md:grid-cols-2: mulai lebar 768px ke atas, berubah menjadi 2 kolom.

**4. Jelaskan fungsi atribut alt, serta kapan atribut tersebut diisi deskripsi dan kapan dikosongkan.**

Atribut alt menyediakan teks alternatif pada gambar, dibacakan oleh screen reader dan ditampilkan saat gambar gagal dimuat.

Diisi deskripsi: jika gambar menyampaikan informasi penting. Contoh: alt="Diagram prosesor ARM".
Dikosongkan (alt=""): jika gambar hanya dekoratif, agar screen reader melewatinya.

**5. Alasan Placeholder Tidak Dapat Menggantikan Label**

- Placeholder hilang saat pengguna mulai mengetik, sehingga petunjuk kolom ikut hilang.
- Tidak semua screen reader membacakan placeholder, sedangkan <label> selalu terbaca.
- Warna placeholder terlalu pudar, sulit dibaca pengguna dengan gangguan penglihatan.
- <label> yang terhubung via atribut for memperbesar area klik untuk memfokuskan input, placeholder tidak.
