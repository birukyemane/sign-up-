import React, { Component } from 'react';
import './index.css';

class Form extends React.Component {

   constructor(props) {
	super(props);
	this.state = {
		id:'',
		fullName: '',
		email:'',
		phone:''
	};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
  	this.setState({id:this.props.nextId});
    this.props.add(this.state);
    event.preventDefault();
  }

  render() {
    return (
    	<form onSubmit={this.handleSubmit}>
    		<table>
	    	<tr>
	    		<td className="Form-table-cell"> 
	    			<input 
			        type = "text" 
			        placeholder = "Full name" 			        
			        name="fullName"	 
			        value= {this.state.fullName} 
                    onChange={this.handleChange}     
			    	/>	
	    		</td>
	    		<td className="Form-table-cell"> 
	    			<input 
			        type = "email" 
			        placeholder = "E-mail address" 
			        name="email" 
			        value= {this.state.email} 
                    onChange={this.handleChange}	        
			    	/>
	    		</td>
	    		<td className="Form-table-cell"> 	
	    			<input 
			        type = "tel" 
			        placeholder = "Phone number" 
			        name="phone"
			        value= {this.state.phone} 
                    onChange={this.handleChange}		       
			    	/>
	    	  	</td>
	    	  	<td> 
	    	  		<input type="submit" className = "btn btn-primary" value="Add new" />	
	    			
	    	  	</td>
	    	</tr>		    
             </table>  
        </form>
    );  
  }  
}

export default Form;
