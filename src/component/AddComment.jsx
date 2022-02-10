import { Component } from "react";
import books from "./fantasy.json";
import { Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    userComment: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.books,
        {
          method: "POST",
          body: JSON.stringify(this.state.data),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzAyYTgyZWExZDAwMTViYjA0N2MiLCJpYXQiOjE2NDQ0OTQyNjQsImV4cCI6MTY0NTcwMzg2NH0.mgAoL0zUYTDkZNceJdJtOUy833-NlEt_nbxu3yqMiPs",
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log(response);
        alert("reservation saved!");
        this.setState({
          reservation: response,
        });
      } else {
        alert("something went wrong! please try again");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        {this.state.userComment.map((comment) => (
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Add Comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        ))}
      </div>
    );
  }
}

export default AddComment;
