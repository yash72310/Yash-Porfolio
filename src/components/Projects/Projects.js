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
              title="Helping Senior Citizen"
              description="Helping Senior Citizens website would be a one-step solution to many things like companies posting job vacancies for the elderly or specially-abled people and a portal to apply for the same, recreational activities, easy food ordering, and deliveries. "
              ghLink="https://github.com/yash72310/senior"
              demoLink="https://senior-production.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Timeisit"
              description="At TimeISIT, we are passionate about connecting students with our talented team members and bridging the gap in the Education industry. Our mission is to provide a seamless and efficient experience for both students and recipients, ensuring timely access to life-saving transfusions."
              demoLink="http://timeisit.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sorting Visualizer"
              description="The project aims to create a web application that visualizes sorting algorithms such as Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort, and Heap Sort. The project will allow users to select a sorting algorithm and visualize how it works step by step."
              ghLink="https://github.com/yash72310/Sorting_Visualizer/"
              demoLink="https://yash72310.github.io/Sorting_Visualizer/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Treasure Game"
              description="The Treasure Game project is a fun and interactive game that allows players to search for hidden treasures in a grid-based game board. The game is built using C++ and is designed to challenge the player's problem-solving skills while providing an exciting gaming experience."
              demoLink="https://www.youtube.com/watch?v=J6ePxbXbK_k&feature=youtu.be"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
