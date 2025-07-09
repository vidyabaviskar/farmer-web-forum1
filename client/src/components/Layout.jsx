// src/components/Layout.jsx
import React from 'react';
import StickyNavbar from './StickyNavbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <StickyNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
