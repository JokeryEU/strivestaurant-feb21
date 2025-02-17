import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const NotificAlert = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert show={show} variant="danger">
      <Alert.Heading>No comments around here yet</Alert.Heading>
      <p>Be the first to comment</p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-primary">
          Close
        </Button>
      </div>
    </Alert>
  );
};

export default NotificAlert;
