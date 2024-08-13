import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <Container>
      <Row>
        {projects.map(project => (
          <Col key={project.projectId} md={6} lg={4}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsList;
