import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import SubjectIcon from '@material-ui/icons/Subject';
import IconButton from '@material-ui/core/IconButton';

import './Sidebar.css'

const icons = [
  {
    name: "GitHub",
    link: "https://github.com/MichaelRenMR",
    icon: <GitHubIcon/>
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/renmichaelx",
    icon: <LinkedInIcon/>
  },
  {
    name: "Email",
    link: "mailto:michael_ren@berkeley.edu",
    icon: <EmailIcon/>
  }, 
  {
    name: "Resume", 
    link: "https://docs.google.com/document/d/1JmygbVdS8yFC8sI-3Q8wBFps8AZwCElOzpi2G0zuPqI/edit?usp=sharing", 
    icon: <SubjectIcon/>
  }
]


export default function Sidebar(props) {
  const routes = props.children;
  return (
    <div className="sticky-sidebar">
      <div className="sidebar-content">
        <div className="profile-picture">
          <img src={require("../../Images/profile-circle.png")} alt="" className="img-fluid"/>
        </div>
        <div className="profile">
          <h3><b>Michael Ren</b></h3>
            <div className="summary">
              <p>
              Hi! My name is Michael and I’m an undergraduate at UC Berkeley seeking an internship in software development. I’m passionate about cybersecurity, algorithms, and networks. Outside of tech, I'm interested in earth science and pure mathematics.
              </p>
            </div>
        </div>
        <div className="page-nav">
        {routes.map((route) => (
          <Link to={route.path} exact children={<h4><route.sidebar /></h4>} style={{textDecoration:'none'}}
          />))}
        </div>
        <div className="nav-icons">
          {icons.map((icon) => (
            <IconButton
              href={icon.link} 
              className="nav-icon"
              title={icon.name}
              color="inherit"
            >
            {icon.icon}
            </IconButton>))}
        </div>
      </div>
    </div>
  )
}
