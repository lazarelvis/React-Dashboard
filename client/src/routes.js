import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import AccountView from './views/account/AccountView';
import InvoiceListView from './views/customer/InvoiceListView';
import AddInvoice from './views/customer';
import DashboardView from './views/reports/DashboardView';
import LoginView from './views/auth/Login';
import NotFoundView from './views/errors/NotFoundView';
import ProductListView from './views/product';
import RegisterView from './views/auth/Register';
import SettingsView from './views/settings/SettingsView';
import BudgetCalcualtor from './views/calculator';

import Dashboard from './views/dashboard';
// import Auth from './components/Auth';

const routes = isLoggedIn => [
  {
    path: 'app',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'account', element: <AccountView /> },
      { path: 'invoices', element: <InvoiceListView /> },
      { path: 'add_invoce', element: <AddInvoice /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'finance', element: <ProductListView /> },
      { path: 'budget-calculator', element: <BudgetCalcualtor /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: !isLoggedIn ? <MainLayout /> : <Navigate to="/app/dashboard" />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
