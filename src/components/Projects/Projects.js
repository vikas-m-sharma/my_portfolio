import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Diabetes-prediction"
              description="Implemented a Python-based solution, leveraging libraries such as NumPy, Pandas, and Scikit-Learn.
              Successfully trained and fine-tuned machine learning models using TensorFlow, achieving robust predictive accuracy.
              Python (NumPy, Pandas, Scikit-Learn, TensorFlow)Machine Learning (Predictive Modeling)Data Analysis and Visualization (Matplotlib, Seaborn)
              Web Development (Django/Flask for backend, HTML, CSS, JavaScript)"
              ghLink="https://github.com/vikas-m-sharma/diabetes-prediction-intern-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Consult_Doctor"
              description="Successfully launched a virtual consultation platform, improving healthcare accessibility and patient engagement.
              Python (Django), Django REST Framework, WebSocket, HTML, CSS, JavaScript, SQLite/PostgreSQL.              "
              ghLink="https://github.com/vikas-m-sharma/consult_doctor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Campus-Placement"
              description="Collected and cleaned data from various sources.
              Conducted exploratory data analysis (EDA) to identify patterns.
              Utilized machine learning algorithms to predict placement probabilities.
              Created visualizations for clear interpretation of insights.
              Technologies Used:
              Python (NumPy, Pandas, Matplotlib, Seaborn), Jupyter Notebooks, Scikit-Learn."
              ghLink="https://github.com/vikas-m-sharma/campus-placement-datascience-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Potato-Disease-Classification"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/vikas-m-sharma/Potato-Disease-Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Password-hacker"
              description="Utilized Python for scripting and automation.
              Employed various password-cracking techniques, including brute force and dictionary attacks.
              Tested the tool on simulated scenarios to evaluate its effectiveness.
              Technologies Used:
              Python, Scripting, Cybersecurity Tools."
              ghLink="https://github.com/vikas-m-sharma/password-hacker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/vikas-m-sharma/make-your-own-google-browser-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
