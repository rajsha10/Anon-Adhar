// pages/index.tsx
import React from 'react';
import MainLayout from '../app/components/MainLayout';
import Home from '../app/components/Home';

const HomePage: React.FC = () => (
  <MainLayout>
    <Home />
  </MainLayout>
);

export default HomePage;
