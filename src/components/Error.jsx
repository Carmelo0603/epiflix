import { Alert } from "react-bootstrap";

const Error = ({ message = "Si è verificato un errore imprevisto." }) => (
  <Alert variant="danger" className="text-center">
    {message}
  </Alert>
);

export default Error;
