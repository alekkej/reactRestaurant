import React from 'react';

import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Header from './Componets/header/Header';
import ProductsPage from './pages/products/ProductsPage';
import BasketPage from './pages/basket/BasketPage';
import ProductPreviewPage from './pages/preview/ProductPreviewPage'
import Auth from './pages/inup/Auth';

import PublicRoute from './Componets/PublicRoute';
import PrivateRoute from './Componets/PrivateRoute';

import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([{
    path: "/",
    element: <>
      <Header title={'Наша продукция'} hasBasket/>
      <PrivateRoute>
        <ProductsPage />
      </PrivateRoute>
    </>,
  },
  {
    path: "/basket",
    element: 
    <>
      <Header title={'Корзина с выбранными товарами'} hasBackButton />
      <PrivateRoute>
        <BasketPage />
      </PrivateRoute>      
    </>,
  },
  {
    path: "/auth",
    element: 
    <PublicRoute>      
      <Auth />
    </PublicRoute>,
  },
  {
    path: "/dish/:id",
    element: 
    <PrivateRoute>      
      <ProductPreviewPage />
    </PrivateRoute>,
  },
]);

root.render(
  <React.StrictMode>    
    <Provider store={store}>
      <PersistGate loading persistor={persistor}>      
          <RouterProvider router={router} />
      </PersistGate>            
    </Provider>    
  </React.StrictMode>,
);