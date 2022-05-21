import React from 'react';
import ReactToPrint from 'react-to-print';
import TableComponent from './table.component';
 
class ExportPdfComponent extends React.Component {
     
    render() {
      return (
        <div>

           <h1>Export Transcript in PDF File</h1> 

          <TableComponent ref={(response) => (this.componentRef = response)} transcript={this.props.transcript} />
          
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button type="button" className="btn btn-primary">Print to PDF!</button>}
          />
        </div>
      );
    }
}
 
export default ExportPdfComponent;