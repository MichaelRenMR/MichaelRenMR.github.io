import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <hr/>
      <div className="body">
        <div className="picture">
          <img src={require("../../Images/profile-grenwich.jpg")} alt="" className="img-fluid"/>
        </div>
        <p>
          I'm Michael, currently developing highly scalable trade processing systems at Citadel. I graduated from UC Berkeley (EECS) before joining Citadel. During undergrad I interned at Amazon, improving the functionality and usability of its payments debugging ecosystem. I'm a passionate teacher, lifelong learner, and math enthusiast. In my free time I enjoy leatherworking, running, and Ultimate Frisbee. Feel free to contact me at <a href="mailto:michaelrenx@gmail.com">michaelrenx@gmail.com</a> or visit the external links in the sidebar.
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
              <Timeline style={{padding: '6px 6px 6px 0px'}}>
                {timelineEvents.map((event) => 
                <TimelineItem>
                  <TimelineOppositeContent style={{flex: 0.1, padding: '0px 10px 0px 0px'}}>
                    {
                      event.title ? <p><b>{event.date}</b></p> : <p></p>
                    }
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant={event.title? 'default' : 'outlined'}/>
                    <TimelineConnector/>
                  </TimelineSeparator>
                  <TimelineContent style={{padding: '0px 0px 0px 10px'}}>
                    <div className="timelineContent">
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
    date: "Sep", 
    title: "Citadel",
    desc: "Software Engineer, Accounting"
  },
  {
    date: "May",
    title: "UC Berkeley EECS",
    desc: "B.S., EECS"
  },
  {
    date: "Jan",
    title: "CS184 - Graphics",
    desc: "Teaching Assistant"
  },
  {
    date: "2023"
  },
  {
    date: "Sep",
    title: "SLICE Lab",
    desc: "Undergraduate Researcher"
  },
  {
    date: "Jun",
    title: "Citadel",
    desc: "Software Engineering Intern"
  },
  {
    date: "Jan",
    title: "CS184 - Graphics",
    desc: "Teaching Assistant"
  },
  {
    date: "2022"
  },
  {
    date: "Aug",
    title: "Barsky Lab",
    desc: "Undergraduate Researcher"
  },
  {
    date: "May",
    title: "Amazon",
    desc: "Software Engineering Intern",
  },
  {
    date: "Jan",
    title: "EECS16B",
    desc: "Course tutor"
  },
  {
    date: "2021"
  },
  {
    date: "Sep",
    title: "Creative Commons",
    desc: "ML Researcher"
  },
  {
    date: "Sep",
    title: "AFX Tech",
    desc: "Software Developer",
  },
  {
    date: "2020"
  },
  {
    date: "Aug",
    title: "MUSA",
    desc: "Member"
  }
]


const coursework = [
  {
    semester: "Fall 2022",
    courses: [
      {
        course: "CS294-163",
        name: "Secure Systems from Decentralized Trust"
      },
      {
        course: "EECS151",
        name: "Introduction to Digital Design and Integrated Circuits"
      },
      {
        course: "Math 185",
        name: "Complex Analysis"
      },
    ]
  },
  {
    semester: "Spring 2022",
    courses: [
      {
        course: "CS152",
        name: "Computer Architecture and Engineering"
      },
      {
        course: "CS189",
        name: "Machine Learning"
      },
      {
        course: "Math 104",
        name: "Introduction to Analysis"
      },
    ]
  },
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

