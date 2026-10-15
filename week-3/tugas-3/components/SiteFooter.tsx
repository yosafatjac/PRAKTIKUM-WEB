interface SiteFooterProps {
  namaProduk: string;
  tahun?: number;
}

export default function SiteFooter({
  namaProduk,
  tahun = 2026,
}: SiteFooterProps) {
  return (
    <footer className="border-t py-6 text-center text-sm text-gray-500">
      &copy; {tahun} {namaProduk}. Hak cipta dilindungi.
    </footer>
  );
}

