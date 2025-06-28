import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Outlet /> {/* Renders the child route component */}
      </main>
    </>
  );
};

export default Layout;
