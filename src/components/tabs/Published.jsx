import * as React from "react";
import { Table, Button } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

const Published = () => {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>Lorem</td>
            <td className="text-center">
              <Button variant="warning" size="sm" className="me-lg-2 mb-md-2 me-0 mb-lg-0 mb-md-0 mb-2">
                <BsPencilSquare />
              </Button>
              <Button variant="danger" size="sm">
                <BsTrash />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Published;
