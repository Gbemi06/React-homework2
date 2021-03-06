import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchQuery: "",
    comments: [],
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
            .map((b, i) => (
              <SingleBook key={i} book={b} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
