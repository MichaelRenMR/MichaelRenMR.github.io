import React from 'react'
import './Projects.css'

const projects = [
  {
    name: "CS184: Path Tracer", 
    summary: <div>A basic path tracer which renders scenes realistically by following light bounces.</div>,
    thumbnail: require("./thumbnails/pathtracer.png"),
    tools: "C++",
    links: [
      {
        link:"https://cal-cs184-student.github.io/p3-1-pathtracer-su20-MichaelRenMR/",
        desc:"Phase 1 Website" 
      },
      {
        link:"https://cal-cs184-student.github.io/p3-2-pathtracer-su20-MichaelRenMR/",
        desc:"Phase 2 Website" 
      }
    ]
  }, 
  {
    name: "Cal1Cardistry",
    summary: <div>A Chrome extension which consolidates information about your Cal1Card (meal swipes remaining, debit dollars, flex dollars) into one place.</div>,
    thumbnail: require("./thumbnails/cal1card.jpg"),
    tools: "Javascript",
    links: [
      {
        link: "https://github.com/MichaelRenMR/Cal1Cardistry",
        desc: "GitHub Repo"
      }
    ]
  }, 
  {
    name: "Garbage Begone!",
    summary: <div>An AI powered garbage sorter for differentiating cardboard, metal, and paper. Built in collaboration with <a href="https://github.com/Anthonyyzhou">Anthony Zhou</a>, <a href="https://devpost.com/aw1605">Andrew Wang</a>, and <a href="https://github.com/fredwang25">Frederic Wang</a> at HackSC 2020.</div>, 
    thumbnail: require("./thumbnails/garbagebegone.jpg"),
    tools: "Python, Tensorflow, Keras, Arduino, Jupyter",
    links: [
      {
        link: "https://devpost.com/software/garbage-b-gone",
        desc: "Devpost"
      },
      {
        link: "https://github.com/MichaelRenMR/GarbageBegone-",
        desc: "GitHub Repo"
      }
    ]
  },
  {
    name: "CS184: Melting Simulator",
    summary: <div>A real-time melting simulator based on a molecular model built in Unity Game Engine. Built in collaboration with <a href='https://github.com/mathewjhan/'>Mathew Han</a>.</div>, 
    thumbnail: require("./thumbnails/melter.png"),
    tools: "Unity, C#",
    links: [
      {
        link: "https://michaelrenmr.github.io/cs184-melter/",
        desc: "Project Website"
      }
    ]
  }
]

function ProjectCard(project) {
  return (
    <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-horizontal">
          <div className="img-square-wrapper">
            <img src={project.thumbnail} alt="Card image cap" width="280rem"/>
          </div>
          <div className="card-body d-flex flex-column">
            <h3 className="card-title">{project.name}</h3>
            <h5 className="Card-text">{project.summary}</h5>
            <p className="Card-text">Tools: {project.tools}</p>
            <div className="mt-auto">
            {project.links.map((link) => (
                  <a href={link.link} className="btn btn-light">{link.desc}</a>
                ))}
            </div>
             
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default function Projects() {
  return (
    <div>
       <h1>Projects</h1>
        <hr/>
        <p>The personal and group projects which I've worked on over the years.</p>
        {projects.map((project) => (
         ProjectCard(project)
        ))}
    </div>
  )
}