import NewRow from "./NewRow";
import TableHead from "./TableHead";
import { Table } from "react-bootstrap";

const MyTable = (props) => {
  return (
    <Table striped bordered hover variant="dark" className="container">
      <thead>
        <TableHead></TableHead>
      </thead>
      <tbody>
        <NewRow rowData={props.tableContent}></NewRow>
      </tbody>
    </Table>
  );
};

export default MyTable;
