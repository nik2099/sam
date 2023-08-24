import React, { useState } from 'react';
import { Container, Row, Col, TabContent, TabPane } from 'reactstrap';
import Loader from '../components/Layout/Loader';
import Footer from '../components/Layout/Footer';
import RegisterSimple from '../components/Auth/RegisterSimple';
const Logins = () => {
  const [selected, setSelected] = useState('firebase');

  const callbackNav = ((select) => {
    setSelected(select);
  });

  return (

    <section>
      <Loader/>
      <Container fluid={true} className="p-0">
          <Row className="m-0">
              <Col className="p-0">
                  <RegisterSimple />
              </Col>
          </Row>
      </Container>

      <Footer/>
    </section>



  );
};

export default Logins;