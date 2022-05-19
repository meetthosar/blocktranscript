import React from "react";

class TableComponent extends React.Component { 
    render() {
      return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Passed?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ this.props.transcript.name}</td>
            <td>{ this.props.transcript.code}</td>
            <td>{ this.props.transcript.status === true ? "Pass" : "Fail"}</td>
          </tr>
           
        </tbody>
      </table>
    );
  }  
}

export default TableComponent;
