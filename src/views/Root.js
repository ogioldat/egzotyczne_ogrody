import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store/store';
import { routes } from 'routes';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainTemplate from 'templates/MainTemplate';
import HomeView from 'views/HomeView';
import GalleryView from 'views/GalleryView';
import { AboutUsView, OrdersView,
  ContactView, LocationView, PolicyView } from 'views/Subpages';
import PlantDetailsView from './PlantDetailsView';

const Root = () => (
  <Provider store={ store }>
    <Router basename={'/eo'}>
      <Route render={ ({ location }) => (
        <AnimatePresence exitBeforeEnter initial={ false }>
          <MainTemplate path={ location.pathname }>
            <Switch location={ location }>
              <Route exact path={ routes.home } component={ HomeView }/>
              <Route exact path={ routes.root } render={ () => <Redirect to={ routes.home }/> }/>
              <Route path={ routes.plantDetails } component={ PlantDetailsView }/>
              <Route path={ routes.aboutUs } component={ AboutUsView }/>
              <Route path={ routes.orders } component={ OrdersView }/>
              <Route path={ routes.contact } component={ ContactView }/>
              <Route path={ routes.location } component={ LocationView }/>
              <Route path={ routes.gallery } component={ GalleryView }/>
              <Route path={ routes.policy } component={ PolicyView }/>
            </Switch>
          </MainTemplate>
        </AnimatePresence>
      ) }/>
    </Router>
  </Provider>
);


export default Root;
