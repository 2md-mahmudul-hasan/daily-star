
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNave from '../pages/Shared/LeftNav/LeftNave';
import RightNav from '../pages/Shared/RightNav/RightNav';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}><LeftNave></LeftNave></Col>
          <Col lg={6}>sm=true</Col>
          <Col lg={3}><RightNav></RightNav></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;