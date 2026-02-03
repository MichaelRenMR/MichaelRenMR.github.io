import React, { useEffect, useState } from 'react';

import Sidebar from './Components/Sidebar/Sidebar';

import Blog from './Components/Blog/Blog';
import BlogPost from './Components/Blog/BlogPost';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
import Countdown from './Components/Countdown/Countdown';

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
    main: () => <Home/>
  },
  {
    path: "/projects",
    exact: true,
    sidebar: () => <div>Projects</div>,
    main: () => <Projects/>
  },
  {
    path: "/blog",
    exact: true,
    sidebar: () => <div>Blog</div>,
    main: () => <Blog/>
  },
  {
    path: "/blog/:slug",
    exact: true,
    sidebar: () => "",
    main: () => <BlogPost/>
  },
  {
    path: "/andyou",
    exact: true,
    sidebar: () => "",
    main: () => <Countdown/>
  }
  
];


function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    } catch (e) {}
    return 'light';
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <Router>
      <Route render={({ location }) => (
        <div>
          <div className="App containerFluid">
            <div className="appRow">
              <div className="col-4-custom sidebar">
                <Sidebar children={routes} theme={theme} toggleTheme={toggleTheme} />
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
                        <Redirect to="/home" />
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

