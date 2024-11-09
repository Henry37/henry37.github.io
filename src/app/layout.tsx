import type { Metadata } from 'next';
import '../styles/global.css';
import '../styles/theme.css';
import { ThemeProvider } from '../context/ThemeContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Henry Sun',
  description: 'Looking for a new fantastic frontend journey',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
