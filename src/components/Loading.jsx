import { Spinner } from "react-bootstrap";

const Loading = () => (
  <div className="text-center my-4">
    <Spinner animation="border" variant="danger" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default Loading;
