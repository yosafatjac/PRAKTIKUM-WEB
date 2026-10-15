import Bagian from "@/components/Bagian";
import ItemTerbaru from "@/components/ItemTerbaru";

export default function Home() {
  return (
    <main id="konten" className="mx-auto max-w-6xl flex-1 px-4 py-8">
      <div className="py-6">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-900">
          Selamat Datang di EcoTrack
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Platform pemantauan energi terbarukan dan keberlanjutan lingkungan kampus.
        </p>
      </div>

      <Bagian id="terbaru" judul="Item Terbaru">
        <ItemTerbaru />
      </Bagian>

      <Bagian id="fitur" judul="Fitur Unggulan">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border p-5 shadow-xs">
            <h3 className="font-semibold text-lg text-gray-900">Pemantauan Real-time</h3>
            <p className="mt-2 text-sm text-gray-600">
              Pantau produksi daya dan efisiensi panel surya serta turbin secara langsung.
            </p>
          </div>
          <div className="rounded-lg border p-5 shadow-xs">
            <h3 className="font-semibold text-lg text-gray-900">Katalog Terintegrasi</h3>
            <p className="mt-2 text-sm text-gray-600">
              Telusuri aset ramah lingkungan, fasilitas kampus, dan inovasi hijau.
            </p>
          </div>
          <div className="rounded-lg border p-5 shadow-xs">
            <h3 className="font-semibold text-lg text-gray-900">Laporan Keberlanjutan</h3>
            <p className="mt-2 text-sm text-gray-600">
              Dapatkan wawasan jejak karbon dan kontribusi energi bersih kampus.
            </p>
          </div>
        </div>
      </Bagian>

      <Bagian id="kontak" judul="Hubungi Kami">
        <div className="rounded-lg border p-6 bg-gray-50/50">
          <p className="text-gray-700">
            Punya pertanyaan seputar fasilitas hijau atau ingin berkolaborasi?
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>
              <strong className="text-gray-900">Email:</strong> kontak@ecotrack.ac.id
            </li>
            <li>
              <strong className="text-gray-900">Telepon:</strong> (021) 1234-5678
            </li>
            <li>
              <strong className="text-gray-900">Alamat:</strong> Gedung Sains & Teknologi, Universitas Pertamina
            </li>
          </ul>
        </div>
      </Bagian>
    </main>
  );
}

