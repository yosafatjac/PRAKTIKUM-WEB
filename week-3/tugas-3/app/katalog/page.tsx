import type { Metadata } from "next";
import Bagian from "@/components/Bagian";
import DaftarItem from "@/components/DaftarItem";
import { daftarItem } from "@/lib/data";

export const metadata: Metadata = { title: "Katalog | EcoTrack" };

export default function HalamanKatalog() {
  return (
    <main id="konten" className="mx-auto max-w-6xl p-4 flex-1">
      <h1 className="text-3xl font-bold text-gray-900">Katalog</h1>
      <Bagian id="daftar" judul="Daftar Item">
        <DaftarItem items={daftarItem} />
      </Bagian>
    </main>
  );
}
