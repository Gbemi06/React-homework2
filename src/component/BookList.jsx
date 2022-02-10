import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";

class BookList extends React.Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type Here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) =>
              b.title
                .toLowerCase()
                .includes(this.state.searchQuery.toLowerCase())
            )
            .map((b) => (
              <SingleBook book={b} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
