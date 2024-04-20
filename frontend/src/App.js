import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = route.layout;
          if (!Layout) {
            Layout = React.Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}

        {privateRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = route.layout;
          if (!Layout) {
            Layout = React.Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                // user.user ? (
                //   <Layout>
                //     <Page />
                //   </Layout>
                // ) : (
                //   <Navigate to="/dang-nhap" replace />
                // )
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
