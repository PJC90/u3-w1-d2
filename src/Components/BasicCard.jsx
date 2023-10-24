import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import history from "../data/history.json"

function BasicCard() {
  return (
    <Container >
      <Row>
      {history.map((book)=>{
        return(
          
            <Col md={3} className="mb-5">
          <Card  key={book.asin}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
              Category: {book.category}
              </Card.Text>
              <Button variant="primary">{book.price} €</Button>
            </Card.Body>
          </Card>
          </Col>
          
)
})}
</Row>
</Container >
  );
}

export default BasicCard;