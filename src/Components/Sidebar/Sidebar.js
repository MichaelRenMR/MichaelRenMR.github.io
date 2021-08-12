import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

const icons = [
  {
    name: "GitHub",
    link: "https://github.com/MichaelRenMR",
    icon: "fa fa-github fa-fw"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/renmichaelx",
    icon: "fab fa-linkedin-in fa-fw"
  },
  {
    name: "Gmail",
    link: "mailto:michael_ren@berkeley.edu",
    icon: "fas fa-envelope fa-fw"
  }, 
  {
    name: "Resume", 
    link: "https://docs.google.com/document/d/1JmygbVdS8yFC8sI-3Q8wBFps8AZwCElOzpi2G0zuPqI/edit?usp=sharing", 
    icon: "fas fa-address-card fa-fw"
  }
]


export default function Sidebar(props) {
  const routes = props.children;
  return (
    <div id="sticky-sidebar">
      <div id="sidebar-content">
        <div id="profile-picture">
          <img src={require("./profile-circle.png")} alt="" className="img-fluid"/>
        </div>
        <div id="profile">
          <h3><b>Michael Ren</b></h3>
            <div id="summary">
              <p>
              Hi! My name is Michael and I’m an undergraduate at UC Berkeley seeking an internship in software development. I’m passionate about cybersecurity, algorithms, and networks. Outside of tech, I'm interested in earth science and pure mathematics.
              </p>
            </div>
        </div>
        <div id="page-nav">
        {routes.map((route) => (
          <Link to={route.path} exact children={<h4><route.sidebar /></h4>} style={{textDecoration:'none'}}
          />))}
        </div>
        <div id="nav-icons">
          {icons.map((icon) => (
            <a className="btn btn-light" href={icon.link} id="nav-icon">
            <i className={icon.icon}></i>
            </a>))}
        </div>
      </div>
    </div>
  )
}
