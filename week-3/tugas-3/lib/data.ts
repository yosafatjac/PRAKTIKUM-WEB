import type { Item } from "./tipe";

export const daftarItem: Item[] = [
  {
    id: 1,
    judul: "Panel surya atap",
    kategori: "energi",
    deskripsi: "Pemantauan produksi listrik harian dari panel surya gedung.",
    tersedia: true,
  },
  {
    id: 2,
    judul: "Turbin angin mini",
    kategori: "energi",
    deskripsi: "Pembangkit listrik tenaga angin skala kecil di taman kampus.",
    tersedia: true,
  },
  {
    id: 3,
    judul: "Bank sampah digital",
    kategori: "lingkungan",
    deskripsi: "Sistem pencatatan dan daur ulang sampah terpilah civitas akademika.",
    tersedia: true,
  },
  {
    id: 4,
    judul: "Sensor kualitas udara",
    kategori: "lingkungan",
    deskripsi: "Pemantauan kadar PM2.5 dan CO2 secara real-time di lingkungan kampus.",
    tersedia: false,
  },
  {
    id: 5,
    judul: "Stasiun pengisian motor listrik",
    kategori: "kampus",
    deskripsi: "Fasilitas pengisian daya gratis bagi kendaraan listrik mahasiswa.",
    tersedia: true,
  },
  {
    id: 6,
    judul: "Taman hidroponik kampus",
    kategori: "kampus",
    deskripsi: "Kebun edukasi sayuran organik dengan sistem irigasi otomatis.",
    tersedia: true,
  },
];