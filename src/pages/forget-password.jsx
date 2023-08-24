import React, { useState } from 'react';
import { Container, Row, Col, TabContent, TabPane } from 'reactstrap';
import Loader from '../components/Layout/Loader';
import Footer from '../components/Layout/Footer';
import ForgetPwd from '../components/Auth/ForgetPwd';
const ForgetPassword = () => {
 
  return (
    
    <section>
      <Loader/>
        <Container fluid={true} className="p-0">
          <Row>
            <Col xs="12">     
                  <ForgetPwd/>
            </Col>
          </Row>
      </Container>
      <Footer/>
  </section>
  );
};

export default ForgetPassword;