import * as React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col key={idx}>
              <Card className="article-card" onClick={() => navigate("/postDetail")}>
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>Category</Card.Text>
                  <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Preview;
