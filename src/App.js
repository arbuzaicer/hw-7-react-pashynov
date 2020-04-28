import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { switchSelector } from "./store/selectors/rootSelectors";

import routes from './routes';
import SwitchThemeSide from './components/SwitchThemeSide/SwitchThemeSide';
import Navbar from './components/navbar/Navbar';
import Layout from './components/layout';

const App = () => {
  const routesData = routes.map((route) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    );
  });
  const selectMode = useSelector(switchSelector);
  return (
    <div className="App">
      <Navbar />
      <SwitchThemeSide mode={selectMode} />
      <Layout>
        {routesData}
      </Layout>
    </div>
  );
};

export default App;
