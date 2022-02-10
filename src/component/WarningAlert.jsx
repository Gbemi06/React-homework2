import { Alert } from "react-bootstrap";

const WarningAlert = (props) => <Alert variant="danger"> {props.text}</Alert>;

export default WarningAlert;
