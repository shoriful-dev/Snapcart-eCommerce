import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Snapcart | 10 minutes grocery delivery App',
  description: '10 minutes grocery delivery App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full min-h-screen bg-linear-to-b from-green-100 to-white ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
