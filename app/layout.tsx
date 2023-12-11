import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '仪表盘',
  description: '这是next.js实现仪表盘',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
