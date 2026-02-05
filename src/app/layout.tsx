"use client";

import './globals.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Vlibras from './components/Vlibras'; 
import AccessibilityButton from "./components/AccessibilityButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body cz-shortcut-listen="true">
        <Navbar />
        {children}
        <AccessibilityButton />
        <Vlibras />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
