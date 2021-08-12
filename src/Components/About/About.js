import React from 'react'
import './About.css'

export default function About() {
  return (
    <div>
      <h1>About</h1>
        <hr/>
        <p>
          I'm Michael Ren, an Electrical Engineering and Computer Science major at UC Berkeley. This past summer, I was a 
          software engineering intern at Amazon, where I worked on improving the functionality and ease of use of Amazon's 
          payments debugging ecosystem. I'm a passionate teacher, lifelong learner, and math enthusiast. In my free time I enjoy reading,
          watching TV, and playing ultimate. Feel free to contact me at <a>michael_ren@berkeley.edu</a> or visit any other external
          links on the sidebar to the right!
        </p>
        <h3>Coursework</h3>
          <p>This is a quick survey of my coursework at Berkeley. Outside of university, I've also taken additional
            courses in programming, competitive mathematics, and number theory.
          </p>
          <h5>Spring 2021</h5>
            <ul>
              <li>CS162: Operating Systems and Systems Programming</li>
              <li>CS161: Computer Security</li>
            </ul>
          <h5>Fall 2020</h5>
            <ul>
              <li>CS188: Introduction to Artificial Intelligence</li>
              <li>CS170: Efficient Algorithms and Intractable Problems</li>
              <li>CS61C: Great Ideas in Computer Architecture (Machine Structures)</li>
            </ul>
          <h5>Summer 2020</h5>
            <ul>
              <li>CS184: Computer Graphics and Imaging</li>
              <li>Data 8: Foundations of Data Science</li>
            </ul>
          <h5>Spring 2020</h5>
            <ul>
              <li>CS61B: Data Structures</li>
              <li>CS70: Discrete Mathematics and Probability Theory</li>
              <li>EECS16B: Designing Information Systems and Devices II</li>
            </ul>
          <h5>Fall 2019</h5>
          <ul>
            <li>CS61A: Structure and Interpretation of Computer Programs</li>
            <li>EE16A: Designing Information Systems and Devices I</li>
            <li>Math 53: Multivariable Calculus</li>
          </ul>
        {/* <br></br>
        <h3>Resume</h3>
         <iframe src="https://docs.google.com/document/d/e/2PACX-1vRxNXH-8ttFKSWIjUxGVVyaIKJHzzYmL3g6Wu5E3c10yDsAWXEYdI5E23j7MRwdRltaA_YyUVBEQRvD/pub?embedded=true"></iframe> */}
    </div>
  )
}
