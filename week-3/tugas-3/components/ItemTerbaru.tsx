"use client";

import { useEffect, useState } from "react";
import type { Item } from "@/lib/tipe";

type Status = "memuat" | "berhasil" | "gagal";

export default function ItemTerbaru() {
  const [items, setItems] = useState<Item[]>([]);
  const [status, setStatus] = useState<Status>("memuat");

  useEffect(() => {
    let dibatalkan = false;

    async function muat() {
      try {
        const res = await fetch("/data/item.json");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Item[] = await res.json();
        if (!dibatalkan) {
          setItems(data.slice(0, 3));
          setStatus("berhasil");
        }
      } catch {
        if (!dibatalkan) setStatus("gagal");
      }
    }

    muat();
    return () => {
      dibatalkan = true;
    };
  }, []);

  if (status === "memuat") {
    return <p className="text-gray-600">Memuat data…</p>;
  }

  if (status === "gagal") {
    return (
      <p role="alert" className="text-red-600 font-medium">
        Data gagal dimuat. Muat ulang halaman.
      </p>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <li key={item.id} className="rounded-lg border p-4 shadow-xs">
          <span className="text-xs font-semibold text-blue-600 capitalize">
            {item.kategori}
          </span>
          <h4 className="mt-1 font-semibold text-gray-900">{item.judul}</h4>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.deskripsi}</p>
        </li>
      ))}
    </ul>
  );
}
