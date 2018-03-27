import React, { Component } from 'react';
import './index.css';


function TableRow(props) {
  return (
  	<tr className ="Table-row">
      <td key={props.data.fullName}>{props.data.fullName}</td>
      <td key={props.data.email}>{props.data.email}</td>
      <td key={props.data.phone}>{props.data.phone}</td>
      <td className="edit">Edit</td>
      <td className="removeData">Delete</td>
    </tr>
  );
}


class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

  	const rows =  this.props.data.map((data) => {
		return   (
			<TableRow data={data} />
		);		
  	});


    return (
      <table>
		<tr className ="Table-header">
      		<th>Name</th>
      		<th>Email address</th>
      		<th>Phone number</th>
      	</tr>  
      	{rows}   		     	 
      </table>
    );
  }
}
 
export default Table;
