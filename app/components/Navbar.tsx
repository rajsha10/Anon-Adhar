import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 text-white p-4">
    <ul className="flex space-x-4">
      <li>
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/dashboard">
          <a className="hover:underline">Dashboard</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
