import { createBrowserRouter, redirect } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import PageAuth from './pages/PageAuth';
import actionLogin, { actionLogout } from './pages/PageAuth/action';
import BaseLayout from './layouts/BaseLayout';
import UserFriends from './pages/UserFriends';
import Chat from './pages/Chat';
import Page404 from './pages/404';
import loaderUserFriends from './pages/UserFriends/loader';
import loaderRoot from './pages/loader';
import loaderPageAuth from './pages/PageAuth/loader';

export const router = createBrowserRouter([
  {
    path: '/404',
    element: (
      <BaseLayout asideDisable>
        <Page404 />
      </BaseLayout>
    ),
  },
  {
    path: '/auth',
    element: <BaseLayout asideDisable />,
    children: [
      {
        index: true,
        element: <PageAuth />,
        action: actionLogin,
        loader: loaderPageAuth,
      },
    ],
  },
  {
    path: '/',
    element: <BaseLayout />,
    loader: loaderRoot,
    id: 'root',
    errorElement: (
      <BaseLayout asideDisable>
        <Page404 />
      </BaseLayout>
    ),
    children: [
      {
        index: true,
        element: <UserProfile />,
      },
      {
        path: 'friends',
        element: <UserFriends />,
        loader: loaderUserFriends,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: 'logout',
        action: actionLogout,
        loader: async () => redirect('/404'),
      },
    ],
  },
]);
