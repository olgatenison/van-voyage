import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
// import { lazy } from 'react';

import { Global } from '@emotion/react';
import { globalStyled } from 'styles/GlobalStyled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from 'components/layout/Layout';
import Home from 'pages/home/Home';
import Catalog from 'pages/catalog/Catalog';
import Favorite from 'pages/favorite/Favorite';

// const Catalog = lazy(() => import('pages/catalog/Catalog'));
// const Favorite = lazy(() => import('pages/favorite/Favorite'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Global styles={globalStyled} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  );
};
