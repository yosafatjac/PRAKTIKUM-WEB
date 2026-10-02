import Link from "next/link";

const fitur = [
  { judul: "HTML Semantik", deskripsi: "Struktur halaman bermakna untuk SEO dan aksesibilitas." },
  { judul: "Flexbox", deskripsi: "Tata letak satu dimensi untuk perataan elemen." },
  { judul: "Grid Layout", deskripsi: "Tata letak dua dimensi untuk kerangka halaman kompleks." },
];

export default function LatihanModul2() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <a href="#konten" className="sr-only focus:not-sr-only focus:p-2 bg-blue-600 text-white absolute">
        Lewati ke konten utama
      </a>

      {/* HEADER (Flexbox) */}
      <header className="border-b bg-white">
        <nav aria-label="Navigasi utama" className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <Link href="/" className="text-xl font-bold text-blue-700">LatihanPAW</Link>
          <ul className="flex gap-6 font-medium">
            <li><a href="#fitur" className="hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">Fitur</a></li>
            <li><a href="#cara-kerja" className="hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">Cara Kerja</a></li>
            <li><a href="#kontak" className="hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">Kontak</a></li>
          </ul>
        </nav>
      </header>

      {/* MAIN KONTEN (Dibatasi mx-auto max-w-6xl) */}
      <main id="konten" className="mx-auto max-w-6xl p-4">
        
        <section aria-labelledby="judul-utama" className="py-10 text-center">
          <h1 id="judul-utama" className="text-3xl font-extrabold mb-4">Latihan Flexbox dan Grid</h1>
          <p className="text-gray-600">Halaman ini mengimplementasikan tata letak responsif menggunakan Tailwind CSS.</p>
        </section>

        {/* FITUR (Grid Mobile-First: 1 kolom di HP, 3 kolom di Desktop) */}
        <section id="fitur" aria-labelledby="judul-fitur" className="mt-8">
          <h2 id="judul-fitur" className="text-2xl font-bold border-b pb-2">Daftar Fitur</h2>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fitur.map((f) => (
              <li key={f.judul}>
                <article className="h-full rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-800">{f.judul}</h3>
                  <p className="mt-2 text-gray-700">{f.deskripsi}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* CARA KERJA & ASIDE (Grid 2 kolom dengan proporsi) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <section aria-labelledby="judul-cara">
            <h2 id="judul-cara" className="text-2xl font-bold mb-4">Cara Kerja Tata Letak</h2>
            <p className="text-gray-700 mb-2">
              Bagian ini membuktikan penggunaan grid dengan ukuran sembarang <code>grid-cols-[2fr_1fr]</code> pada layar tablet/desktop. 
              Konten utama mengambil dua per tiga bagian layar, sedangkan informasi tambahan mengambil satu per tiga sisa layar.
            </p>
          </section>
          
          <aside aria-label="Informasi tambahan" className="rounded-lg bg-gray-100 p-6 border">
            <h3 className="font-bold mb-2">Info Tambahan</h3>
            <p className="text-sm text-gray-600">Gunakan Inspect Element (F12) untuk melihat bagaimana posisi kotak ini bergeser ke bawah saat dibuka di layar HP.</p>
          </aside>
        </div>

        {/* FORMULIR (Aksesibilitas Label) */}
        <section id="kontak" aria-labelledby="judul-kontak" className="mt-12 pt-8 border-t max-w-md">
          <h2 id="judul-kontak" className="text-2xl font-bold mb-4">Hubungi Kami</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold text-sm">Alamat Email</label>
              <input type="email" id="email" className="border rounded p-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" required />
            </div>
            <button type="submit" className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800">Kirim</button>
          </form>
        </section>

      </main>

      <footer className="border-t bg-white py-6 mt-12 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Proyek Latihan Modul 2</p>
      </footer>
    </div>
  );
}