// pages/document.tsx
import React from 'react';
import MainLayout from '@/app/Layouts/MainLayout';
import FileUpload from '@/app/components/FileUpload';

const DocumentPage: React.FC = () => {
  const handleFileSelect = (file: File) => {
    // Handle file upload logic here (e.g., send to server, process, etc.)
    console.log('Selected file:', file);
    // Implement your file handling logic (e.g., upload to server, process, etc.)
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Import Document</h1>
        <FileUpload onFileSelect={handleFileSelect} />
      </div>
    </MainLayout>
  );
};

export default DocumentPage;
