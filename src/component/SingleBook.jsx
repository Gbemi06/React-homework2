import React from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={12} md={4} lg={3} key={this.props.key} className="mb-3">
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "3px solid red" : "none" }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
