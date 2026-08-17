import type { Metadata } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/syne';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adarsh Subrahmannyan — Developer',
  description: 'Adarsh Subrahmannyan — turning weird ideas into working software. CS student, developer, builder.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
