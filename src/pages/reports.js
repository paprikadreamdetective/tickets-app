import React from 'react';
import { Container, Table, Button } from 'reactstrap';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ReporteTabla = ({ data }) => {

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: '#my-table' });
    doc.save('reporte.pdf');
  };

  const generateExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reporte');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'reporte.xlsx');
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="table-container">
        <Table responsive hover id="my-table" className="table-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>No°Ticket</th>
              <th>Asunto</th>
              <th>Area</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.nombre}</td>
                <td>{dato.email}</td>
                <td>{dato.noTicket}</td>
                <td>{dato.asunto}</td>
                <td>{dato.area}</td>
                <td>{dato.estado}</td>
                <td>
                  <Button color="primary" onClick={() => alert('Editar')}>
                    Editar
                  </Button>{' '}
                  <Button color="danger" onClick={() => alert('Eliminar')}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button color="success" onClick={generatePDF}>Descargar PDF</Button>{' '}
        <Button color="info" onClick={generateExcel}>Descargar Excel</Button>
      </div>
    </Container>
  );
};

export default ReporteTabla;
