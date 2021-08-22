import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './About.css'

export default function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <hr/>
      <div className="body">
        <div className="picture">
          <img src={require("../../Images/linkedin.jpg")} alt="" className="img-fluid"/>
        </div>
        <p>
          I'm Michael Ren, an Electrical Engineering and Computer Science major at UC Berkeley. This past summer, I was a 
          software engineering intern at Amazon, where I worked on improving the functionality and ease of use of Amazon's 
          payments debugging ecosystem. I'm a passionate teacher, lifelong learner, and math enthusiast. In my free time I enjoy reading,
          watching TV, and playing ultimate. Feel free to contact me at <a>michael_ren@berkeley.edu</a> or visit any other external
          links on the sidebar to the right! 
        </p>
        <div className="sections">
          <div className="coursework">
            <h3>Coursework</h3>
            <p>This is a quick survey of my coursework at Berkeley. Outside of university, I've also taken additional
              courses in programming, competitive mathematics, and number theory.
            </p>
            {coursework.map((semester) => 
              <div>
                <h5>{semester.semester}</h5>
                <ul>
                  {semester.courses.map((course) => 
                    <li>{course.course}: {course.name}</li>
                  )}
                </ul>
              </div>
            )}
          </div>
          <div className="timeline">
            <h3>Bio</h3>
            <div className="muiTimelineWrapper">
              <Timeline align="left">
                {timelineEvents.map((event) => 
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant={event.title? 'default' : 'outlined'}/>
                    <TimelineConnector/>
                  </TimelineSeparator>
                  <TimelineContent>
                    <div class="timelineContent">
                      {
                        event.title ? 
                          <p><b>{event.title}</b> - {event.desc}</p> 
                          :
                          <b>{event.date}</b>
                      }
                    </div>
                  </TimelineContent>
                </TimelineItem>
                )}
              </Timeline>          
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const timelineEvents = [
  {
    date: "May-Aug 2021",
    title: "Amazon",
    desc: "Software Engineering Intern",
  },
  {
    date: "Jan-May 2021",
    title: "EECS16B",
    desc: "Course tutor"
  },
  {
    date: "Jan 2021",
    title: "Ecode @ Berkeley",
    desc: "Software Developer"
  },
  {
    date: "2021"
  },
  {
    date: "Sep 2020",
    title: "Creative Commons",
    desc: "ML Researcher"
  },
  {
    date: "Sep 2020",
    title: "AFX Tech",
    desc: "Software Developer",
  },
  {
    date: "May-Aug 2020",
    title: "Climate Action Guide",
    desc: "Software Engineering Intern",
  },
  {
    date: "2020"
  },
  {
    date: "Aug 2019",
    title: "Math Undergraduate Student Association",
    desc: "Member"
  }
]


const coursework = [
  {
    semester: "Fall 2021",
    courses: [
      {
        course: "CS186",
        name: "Database Systems"
      },
      {
        course: "EECS127",
        name: "Optimization Models"
      },
      {
        course: "Econ C103",
        name: "Introduction to Mathematical Economics"
      },
    ]
  },
  {
    semester: "Spring 2021",
    courses: [
      {
        course: "CS162",
        name: "Operating Systems"
      },
      {
        course: "CS161",
        name: "Computer Security"
      },
      {
        course: "Math 113",
        name: "Abstract Algebra"
      }
    ]
  },
  {
    semester: "Fall 2020",
    courses: [
      {
        course: "CS170",
        name: "Efficient Algorithms and Intractable Problems"
      },
      {
        course: "CS188",
        name: "Introduction to Artificial Intelligence"
      },
      {
        course: "CS61C",
        name: "Great Ideas in Computer Architecture (Machine Structures)"
      }
    ]
  },
  {
    semester: "Summer 2020",
    courses: [
      {
        course: "CS184",
        name: "Computer Graphics and Imaging"
      },
      {
        course: "Data 8",
        name: "Foundations of Data Science"
      }
    ]
  },
  {
    semester: "Spring 2020",
    courses: [
      {
        course: "CS61B",
        name: "Data Structures"
      },
      {
        course: "CS70",
        name: "Discrete Mathematics and Probability Theory"
      },
      {
        course: "EECS16B",
        name: "Designing Information Systems and Devices II"
      }
    ]
  },
  {
    semester: "Fall 2019",
    courses: [
      {
        course: "CS61A",
        name: "Structure and Interpretation of Computer Programs"
      },
      {
        course: "EECS16A",
        name: "Designing Information Systems and Devices I"
      },
      {
        course: "Math 53",
        name: "Multivariable Calculus"
      }
    ]
  }
]
