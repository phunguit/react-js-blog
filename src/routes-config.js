import React from 'react';

import HomePage       from './pages/HomePage';
import AboutPage      from './pages/AboutPage';
import NotFoundPage   from './pages/NotFoundPage';
import BlogPage       from './pages/BlogPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/about',
    exact: true,
    main: () => <AboutPage />
  },
  {
    path: '/blog',
    exact: true,
    main: () => <BlogPage />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />
  }
  
];

export default routes;