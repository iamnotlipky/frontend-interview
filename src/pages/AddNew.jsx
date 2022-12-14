import * as React from "react";
import { Button, Container, Form } from "react-bootstrap";

const AddNew = () => {
  return (
    <div className="content">
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" name="category" placeholder="Enter category" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control name="content" as="textarea" rows={5} placeholder="Type content here" />
          </Form.Group>
          <Button variant="primary" type="submit" className="button me-3">
            Publish
          </Button>
          <Button variant="primary" type="submit" className="button">
            Draft
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddNew;
