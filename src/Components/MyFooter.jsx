import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'

const MyFooter = () => {
  

  return (
    
      <Container fluid className='bg-dark text-white py-5'>
        <Container >
       <Row className='text-center'>
        <Col>Chi Siamo</Col>
        <Col>Lavora con noi</Col>
        <Col>Contatti</Col>
       </Row>
       </Container>
      </Container>
    
  )
}

export default MyFooter
