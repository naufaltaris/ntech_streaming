# N-TECH Drama — Versi Modifikasi

Modifikasi dari repo SekaiDrama: rebrand ke N-TECH dan tema biru muda terang.

## Yang diubah
- **Logo:** `public/ntech-logo.svg` (kotak biru muda gradasi + tombol play putih).
  Dipakai di Header, sebagai favicon (`icons` di `src/app/layout.tsx`), dan
  judul situs menjadi "N-TECH Drama - Streaming Drama Pendek".
  Header menampilkan "N-TECH" + sub-teks "DRAMA". Halaman watch dan footer
  juga sudah diganti ke N-TECH (footer: "© N-TECH STORE").
- **Tema biru muda:** `src/styles/globals.css` (dan salinan lama `src/index.css`).
  Dulu latar gelap ungu/pink (primary ungu 280°). Sekarang latar putih-biru
  sangat muda, teks navy gelap, primary sky-blue (#0EA5E9-ish, 199°),
  gradasi sky → cyan, dan tema default diubah dari dark ke light
  (`src/components/providers.tsx`). Halaman nonton video tetap hitam
  (sengaja, supaya video nyaman ditonton).
- **API:** TIDAK diubah — sudah benar. `.env.example` sudah berisi
  `NEXT_PUBLIC_API_BASE_URL=https://api.sansekai.my.id/api`, dan semua route
  di `src/app/api/*` memakai itu (dengan fallback yang sama). Kredit API di
  footer tetap "SΛNSΞKΛI API" karena itu memang API upstream-nya.
- **Popup donasi QRIS DINONAKTIFKAN** (`src/app/detail/layout.tsx`):
  `public/qris.jpg` bawaan repo adalah QRIS pemilik repo lama, bukan QRIS
  N-TECH. Jangan aktifkan lagi sebelum mengganti file itu dengan QRIS
  N-TECH, lalu hapus komentar di `detail/layout.tsx`.

## Catatan logo
Logo di sini adalah logo baru yang dibuat untuk versi ini (SVG sederhana),
bukan file logo asli N-TECH — karena tidak ada file logo asli yang
dilampirkan. Kalau kamu punya file logo asli (PNG/SVG), cukup timpa
`public/ntech-logo.svg` dengan file itu (atau kirim ke saya, saya pasangkan).

## Cara menjalankan
```bash
cp .env.example .env
npm install
npm run dev
# buka http://localhost:3000
```

Build production sudah terverifikasi lolos (`npm run build`), dan halaman
utama terverifikasi merespons HTTP 200 dengan judul & logo N-TECH.
