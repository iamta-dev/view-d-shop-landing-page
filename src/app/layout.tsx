import type { Metadata } from 'next'
import { IBM_Plex_Sans_Thai } from 'next/font/google'
import '~/styles/globals.css';

// ตั้งค่า font
const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans-thai',
})

// Metadata สำหรับ SEO
export const metadata: Metadata = {
  title: 'View D Shop - แฟชั่นระดับพรีเมียม',
  description: 'ค้นพบแฟชั่นระดับพรีเมียมที่คุณเข้าถึงได้ที่ View D Shop พร้อมบริการจัดส่งภายใน 24 ชั่วโมง',
  keywords: 'แฟชั่น, เสื้อผ้า, พรีเมียม, ออนไลน์ช้อปปิ้ง, View D Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className={`${ibmPlexSansThai.variable}`}>
      <body className={`font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}