import QrisDonationPopup from '@/components/QrisDonationPopup';

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* Popup donasi QRIS bawaan repo DINONAKTIFKAN untuk versi N-TECH:
          file public/qris.jpg masih QRIS pemilik repo lama, bukan QRIS N-TECH.
          Aktifkan lagi setelah mengganti public/qris.jpg dengan QRIS N-TECH. */}
      {/* <QrisDonationPopup /> */}
    </>
  );
}
