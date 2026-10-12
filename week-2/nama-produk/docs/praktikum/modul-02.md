# Dokumen Teknis Modul 2 — HTML Semantik, Tailwind CSS, dan Aksesibilitas

Nama/NIM   : Yosafat Jacobus / 105224016  
Repositori : https://github.com/yosafatjac/PRAKTIKUM-WEB  

---

## 1. Struktur Semantik

### Kerangka Landmark dan Hierarki Judul Halaman Utama
Halaman utama disusun menggunakan elemen semantik HTML5 dengan pemetaan peran landmark ARIA yang terstruktur:
- `<header className="border-b">`: Berperan sebagai landmark `banner`, memuat logo dan identitas produk.
- `<nav aria-label="Navigasi utama">`: Berperan sebagai landmark `navigation`, membungkus menu tautan.
- `<a href="#konten" className="sr-only focus:not-sr-only focus:p-2">`: Tautan *skip to content* untuk aksesibilitas navigasi papan ketik.
- `<main id="konten">`: Berperan sebagai landmark `main` yang menampung seluruh konten utama halaman.
- Hierarki Judul:
  - `<h1 id="judul-utama">`: Judul utama produk ("Latihan Flexbox dan Grid").
  - `<section id="fitur" aria-labelledby="judul-fitur">`: Landmark `region` dengan `<h2 id="judul-fitur">Daftar Fitur</h2>`.
    - Kartu fitur dibungkus elemen `<article>` dengan judul `<h3>` ("HTML Semantik", "Flexbox", "Grid Layout").
  - `<section aria-labelledby="judul-cara">`: Memuat `<h2 id="judul-cara">Cara Kerja Tata Letak</h2>`.
  - `<aside aria-label="Informasi tambahan">`: Berperan sebagai landmark `complementary` untuk info pendukung.
  - `<section id="kontak" aria-labelledby="judul-kontak">`: Memuat `<h2 id="judul-kontak">Hubungi Kami</h2>`.
- `<footer className="border-t">`: Berperan sebagai landmark `contentinfo` pada kaki halaman.

### Tangkapan Layar Pohon Aksesibilitas pada DevTools
Pemeriksaan dilakukan melalui panel Elements -> Accessibility pada DevTools untuk memastikan semua elemen terpetakan ke pohon aksesibilitas secara utuh:

![Pohon Aksesibilitas](<../../Bukti Percobaan Screenshot/Gambar Pengetesan Skor Accessibility/Halaman Utama/Screenshot 2026-10-02 at 14.24.29.png>)

---

## 2. Tata Letak Responsif

### Tangkapan Layar pada Tiga Ukuran Layar (Halaman Utama)
Pengujian responsivitas dilakukan tanpa memicu gulir horizontal (*horizontal scroll*) pada ketiga ukuran layar:

#### 1. Tampilan Ponsel (Lebar 360 px)
Navigasi tersusun vertikal (`flex-col`), daftar kartu tampil 1 kolom (`grid-cols-1`), konten dan aside bertumpuk:
![Tampilan Ponsel 360px](<../../Bukti Percobaan Screenshot/Tangkapan layar pada lebar 360 px, 768 px, dan 1280 px/Screenshot 2026-10-12 at 10.36.11.png>)

#### 2. Tampilan Tablet (Lebar 768 px)
Navigasi tertata mendatar (`sm:flex-row`), kartu fitur tertata dalam 2 kolom (`sm:grid-cols-2`):
![Tampilan Tablet 768px](<../../Bukti Percobaan Screenshot/Tangkapan layar pada lebar 360 px, 768 px, dan 1280 px/Screenshot 2026-10-12 at 10.37.45.png>)

#### 3. Tampilan Desktop (Lebar 1280 px)
Kartu fitur tertata dalam 3 kolom (`lg:grid-cols-3`), bagian konten dan aside berdampingan 2 kolom proporsional (`lg:grid-cols-[2fr_1fr]`):
![Tampilan Desktop 1280px](<../../Bukti Percobaan Screenshot/Tangkapan layar pada lebar 360 px, 768 px, dan 1280 px/Screenshot 2026-10-12 at 11.08.32.png>)

### Kelas Flexbox, Grid, dan Breakpoint Beserta Alasannya
- **Flexbox (`flex`, `flex-col`, `sm:flex-row`, `justify-between`, `items-center`):**
  - **Alasan:** Digunakan pada navigasi karena tata letak bersifat satu dimensi. Pada ponsel, item disusun vertikal (`flex-col`), lalu mulai breakpoint `sm` (640px) beralih ke susunan horizontal mendatar (`sm:flex-row`) dengan ruang terbagi merata di antara logo dan menu (`justify-between`).
- **Grid (`grid`, `grid-cols-1`, `sm:grid-cols-2`, `lg:grid-cols-3`, `gap-6`):**
  - **Alasan:** Digunakan pada daftar kartu fitur karena tata letak bersifat dua dimensi (baris dan kolom). Pendekatan *mobile-first* diterapkan: dasar 1 kolom untuk ponsel, 2 kolom pada `sm` (tablet), dan 3 kolom pada `lg` (desktop).
- **Arbitrary Grid (`grid-cols-[2fr_1fr]`):**
  - **Alasan:** Digunakan pada tata letak konten utama dan `aside` pendukung agar porsi ruang terbagi proporsional 2:1 pada layar desktop tanpa memerlukan perhitungan manual.
- **Breakpoint Mobile-First:**
  - Kelas tanpa awalan (`w-full`, `p-4`) menargetkan perangkat ponsel terlebih dahulu, sementara awalan breakpoint (`sm:`, `md:`, `lg:`) memperluas tata letak secara bertahap saat layar membesar.

---

## 3. Audit Aksesibilitas

### Tabel Skor Lighthouse Sebelum dan Sesudah Perbaikan

| Halaman | Skor Sebelum | Skor Sesudah | Status |
| :--- | :---: | :---: | :---: |
| Halaman Latihan (`/latihan-audit`) | 79 | 100 | Lulus (Target min. 90) |
| Halaman Utama Produk (`/`) | 84 | 100 | Lulus (Target min. 85) |

### Bukti Tangkapan Layar Audit Lighthouse

#### 1. Halaman Latihan Audit (Sebelum Perbaikan - Skor 79)
![Latihan Audit Skor 79](<../../Bukti Percobaan Screenshot/Gambar Pengetesan Skor Accessibility/latihan-audit/Screenshot 2026-10-02 at 15.25.16.png>)

#### 2. Halaman Latihan Audit (Evaluasi Perbaikan - Skor 94)
![Latihan Audit Skor 94](<../../Bukti Percobaan Screenshot/Gambar Pengetesan Skor Accessibility/latihan-audit/Screenshot 2026-10-02 at 15.30.33.png>)

#### 3. Halaman Latihan Audit (Setelah Perbaikan - Skor 100 Selesai)
![Latihan Audit Selesai 100](<../../Bukti Percobaan Screenshot/Gambar Pengetesan Skor Accessibility/latihan-audit/Screenshot 2026-10-02 at 15.54.53.png>)

#### 4. Halaman Utama Produk (Sebelum Perbaikan - Skor 84)
![Halaman Utama Sebelum Perbaikan](<../../Bukti Percobaan Screenshot/Gambar Pengetesan Skor Accessibility/Halaman Utama/Screenshot 2026-10-12 at 10.49.55.png>)

#### 5. Halaman Utama Produk (Sesudah Perbaikan - Skor 100 Sempurna)
![Halaman Utama Sesudah Perbaikan](<../../Bukti Percobaan Screenshot/Gambar Pengetesan Skor Accessibility/Halaman Utama/Screenshot 2026-10-02 at 15.54.44.png>)

### Daftar Audit yang Gagal, Penyebab, dan Perbaikannya

1. **Audit: Buttons do not have an accessible name**
   - *Penyebab:* Elemen tombol pencarian hanya berisi ikon SVG tanpa nama atau teks pendamping.
   - *Perbaikan:* Menambahkan atribut `aria-label="Cari fitur"` pada elemen `<button>` dan atribut `aria-hidden="true"` pada elemen `<svg>`.

2. **Audit: Form elements do not have associated labels**
   - *Penyebab:* Elemen `<input>` pencarian tidak memiliki label yang terhubung.
   - *Perbaikan:* Menambahkan elemen `<label htmlFor="cari">` yang terlihat dan menyematkan `id="cari"` pada input.

3. **Audit: Background and foreground colors do not have a sufficient contrast ratio**
   - *Penyebab:* Teks abu-abu muda (`text-gray-300`) di atas latar putih memiliki rasio kontras di bawah 4.5:1.
   - *Perbaikan:* Mengubah kelas warna teks menjadi `text-gray-700` agar rasio kontras memenuhi standar WCAG 2.2 AA.

4. **Audit: Image elements do not have [alt] attributes**
   - *Penyebab:* Elemen `<img>` logo tidak memiliki atribut `alt`.
   - *Perbaikan:* Menambahkan atribut `alt="Logo LatihanPAW"` untuk pembaca layar.

5. **Audit: Heading structure**
   - *Penyebab:* Judul halaman awalnya dibungkus tag `<div>` biasa.
   - *Perbaikan:* Menggantinya menjadi tag `<h1>` agar hierarki dokumen dikenali oleh teknologi bantu.

### Hasil Pemeriksaan Manual dengan Papan Ketik
- **Urutan Fokus:** Seluruh elemen interaktif dapat diakses berurutan menggunakan tombol `Tab` (maju) dan `Shift + Tab` (mundur). Alur fokus bergerak logis dari *skip link* -> navigasi -> konten utama -> kolom formulir -> tombol kirim -> footer.
- **Garis Fokus:** Indikator fokus terlihat kontras dan jelas berkat penerapan kelas `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700`.
- **Elemen Radio:** Dapat dipilih menggunakan tombol `Spasi` dan navigasi opsi dapat dilakukan dengan tombol panah pada papan ketik.

---

## 4. Kendala dan Penyelesaian

1. **Kendala Gulir Horizontal:** Pada lebar 360 px sempat terjadi *overflow* horizontal akibat penggunaan nilai lebar tetap (*fixed width*).  
   *Penyelesaian:* Mengganti seluruh lebar tetap menjadi `w-full` dengan pembatas `max-w-6xl mx-auto` serta menerapkan kelas kolom berbasis breakpoint mobile-first.
2. **Pengaruh Ekstensi terhadap Skor Lighthouse:** Ekstensi pihak ketiga di peramban Chrome sempat menurunkan skor audit otomatis.  
   *Penyelesaian:* Audit dijalankan ulang pada jendela *Incognito* (*Private Window*) tanpa ekstensi aktif sehingga skor murni mencapai 100.

---

## 5. Catatan Pemanfaatan AI

- **Alat:** Google DeepMind Antigravity / Gemini
- **Perintah Utama:**
  - Menyusun kerangka Dokumen Teknis sesuai Bagian H Modul 2.
  - Menganalisis temuan audit aksesibilitas Lighthouse serta formulasi perbaikan WCAG 2.2.
  - Memverifikasi kelas Flexbox dan Grid Tailwind CSS untuk kepatuhan mobile-first.
- **Bagian yang Digunakan:** Struktur format markdown laporan, formulasi penjelasan keputusan teknis, dan dokumentasi audit aksesibilitas.
- **Cara Verifikasi:**
  - Melakukan audit ulang secara mandiri menggunakan panel Lighthouse pada Chrome DevTools Incognito hingga mencapai skor 100.
  - Memverifikasi pohon aksesibilitas pada tab *Accessibility* DevTools secara manual.
  - Menguji navigasi keyboard (Tab/Shift+Tab) pada halaman utama yang berjalan di `localhost:3000`.
