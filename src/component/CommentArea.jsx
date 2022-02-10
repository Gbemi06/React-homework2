import AddComment from "./AddComment";
import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  render() {
    return (
      <div>
        <CommentList bookId={this.props.books.asin} />
        <AddComment bookId={this.props.books.asin} />
      </div>
    );
  }
}

export default CommentArea;
