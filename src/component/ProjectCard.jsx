import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{project.projectName}</Card.Title>
        <Card.Text>{project.projectDesc}</Card.Text>
        <Accordion>
          {project.tasks.map((task, index) => (
            <Accordion.Item eventKey={index.toString()} key={task.taskId}>
              <Accordion.Header>{task.taskName}</Accordion.Header>
              <Accordion.Body>
                <p>{task.taskDesc}</p>
                <p><strong>Milestone:</strong> {task.milestone}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
