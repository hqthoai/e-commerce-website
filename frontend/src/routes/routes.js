import DefaultLayout from '../layouts/DefaultLayout';
import HomePage from '../pages/HomePage/HomePage';

const publicRoutes = [
  { path: '/', component: HomePage, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
