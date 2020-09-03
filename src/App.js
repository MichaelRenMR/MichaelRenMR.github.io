import React from 'react';

import Sidebar from './Components/Sidebar/Sidebar'; 

import Homepage from './Components/Home/Homepage'; 
import Projects from './Components/Projects/Projects';
import About from './Components/About/About'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";


import './App.css';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <Homepage/>
  },
  {
    path: "/projects",
    sidebar: () => <div>Projects</div>,
    main: () => <Projects/>
  },
  {
    path: "/about",
    sidebar: () => <div>About</div>,
    main: () => <About/>
  }
];


function App() {
  return (
    <Router>
      <Route render={({ location }) => (
        <div>
          <div className="App">
            <div className="containerFluid">
              <div className="row">
                <div className="col-4">
                  <Sidebar children={routes}/>
                </div>
                <div className="col-8" id="main">
                  <TransitionGroup>
                    <CSSTransition key={location.key} timeout={300} classNames='fade'>
                      <Switch location={location}>
                      {routes.map((route, index) => (
                        <Route
                          exact path={route.path}
                          children={<route.main />}
                        />
                      ))}
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} />
    </Router>
  );
}

export default App;

