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
    path: "/home",
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <Homepage/>
  },
  {
    path: "/projects",
    exact: true,
    sidebar: () => <div>Projects</div>,
    main: () => <Projects/>
  },
  {
    path: "/about",
    exact: true,
    sidebar: () => <div>About</div>,
    main: () => <About/>
  }
];


function App() {  
  return (
    <Router>
      <Route render={({ location }) => (
        <div>
          <div className="App containerFluid">
            <div className="appRow">
              <div className="col-4-custom sidebar">
                <Sidebar children={routes}/>
              </div>
              <div className="col-8-custom main">
                <TransitionGroup>
                  <CSSTransition key={location.key} timeout={300} classNames='fade'>
                    <Switch location={location}>
                    {routes.map((route) => (
                      <Route
                        exact path={route.path}
                        children={<route.main />}
                      />
                    ))}
                      <Route exact path = "/personal/projects">
                        <Redirect to="/projects" />
                      </Route>
                      <Route path = "/">
                        <Redirect to="/about" />
                      </Route>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          </div>
        </div>
      )} />
    </Router>
  );
}

export default App;

