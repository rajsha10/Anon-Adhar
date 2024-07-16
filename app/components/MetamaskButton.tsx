import React from 'react';

const MetaMaskButton: React.FC = () => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected account:', accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else {
      alert('MetaMask not detected. Please install MetaMask and try again.');
    }
  };

  return (
    <button
      onClick={connectWallet}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      Connect MetaMask
    </button>
  );
};

export default MetaMaskButton;
