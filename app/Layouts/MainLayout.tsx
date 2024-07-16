import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <Navbar />
    <main className="flex-grow p-4">
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
