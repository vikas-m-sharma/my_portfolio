import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vikas Sharma </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
             I'm  passionate Junior Python Developer with a keen interest in building efficient and scalable applications.
             I bring a fresh perspective to software development, combining a solid foundation in Python programming with a commitment to continuous learning.
            <br />
            Proficient in Python and its various frameworks such as <span className="purple">Django</span> and <span className="purple">Flask.</span>

            <br/>
            I am currently employed as a <span className="purple"> Jr. Python developer at Linit Exports PVT. LTD. </span>
            <br />
            I am driven by a genuine passion for coding and problem-solving. I believe in the power of teamwork, adaptability, and a continuous learning mindset. I am excited about the prospect of contributing my skills and enthusiasm to dynamic projects as a Junior Python Developer.
            </p>
            <br/>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
