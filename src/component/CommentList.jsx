import { Component } from "react";
import books from "./fantasy.json";

class CommentList extends Component {
  state = {
    userComment: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.books,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzAyYTgyZWExZDAwMTViYjA0N2MiLCJpYXQiOjE2NDQ0OTQyNjQsImV4cCI6MTY0NTcwMzg2NH0.mgAoL0zUYTDkZNceJdJtOUy833-NlEt_nbxu3yqMiPs",
          },
        }
      );
      let data = await response.json();
      this.setState.apply({ userComment: data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <h1> Its working</h1>
      </div>
    );
  }
}

export default CommentList;
