import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-navy-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} VoteIQ – Your Indian Election Guide. 
            Educating citizens for a stronger democracy.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
