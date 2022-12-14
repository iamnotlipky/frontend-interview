import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Drafts from "../components/tabs/Drafts";
import Published from "../components/tabs/Published";
import Trashed from "../components/tabs/Trashed";

const AllPost = () => {
  return (
    <div className="content">
      <Container>
        <div className="tabs">
          <Tabs defaultActiveKey="published" id="justify-tab-example" className="mb-3" justify>
            <Tab eventKey="published" title="Published">
              <Published />
            </Tab>
            <Tab eventKey="drafts" title="Drafts">
              <Drafts />
            </Tab>
            <Tab eventKey="trashed" title="Trashed">
              <Trashed />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
