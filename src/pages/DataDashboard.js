import Table from 'react-bootstrap/Table';

const DataDashboard = () => {
  return(
    <div style={{textAlign: "center"}}>
      <h1>DATA DASHBOARD</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sensor</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default DataDashboard;