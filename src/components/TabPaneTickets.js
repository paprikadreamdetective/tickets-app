import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Tickets from '../pages/tickets_home';
const TabPaneTickets = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Gestion de Tickets
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Tab 2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Tab 3
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Tab 4
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Gestion de tickets</h4>
              <Tickets/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">

          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>

        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h4>Tab 3 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>Tab 4 Contents</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
    </>
  );
};

export default TabPaneTickets;
