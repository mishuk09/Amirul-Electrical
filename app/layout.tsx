import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amirul Electrical Services | Electrical & Aircond in Melaka',
  description: 'Electrical installation, wiring and air-conditioning services in Melaka. Contact Amirul Electrical Services in Taman Krubong Indah.',
  robots: { index: false, follow: false }, // Remove when an approved site goes live.
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
