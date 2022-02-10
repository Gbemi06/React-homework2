import WarningAlert from "./component/WarningAlert";
import "./App.css";
import MyBadge from "./component/MyBadge";
import SingleBook from "./component/SingleBook";
import BookList from "./component/BookList";
import fantasy from "./component/fantasy";
import CommentArea from "./component/CommentArea";

function App() {
  return (
    <div className="App">
      <WarningAlert text="This ia an Alert" />
      <MyBadge color="success" text="The badge" />
      <SingleBook book={fantasy[0]} />
      <CommentArea />
      <BookList books={fantasy} />
    </div>
  );
}

export default App;
