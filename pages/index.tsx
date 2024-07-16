// pages/index.tsx
import React from 'react';
import MainLayout from '@/app/Layouts/MainLayout';
import Home from './Home';

const HomePage: React.FC = () => (
  <MainLayout>
    <Home />
  </MainLayout>
);

export default HomePage;
