import React, { Component } from 'react';
import './index.css';

class Form extends React.Component {

  render() {
    return (
    	<form>
    		<table>
	    	<tr>
	    		<td className="Form-table-cell"> 
	    			<input 
			        type = "text" 
			        placeholder = "Full name" 
			        className= "InputArea" 
			        name="fullName"	      
			    	/>	
	    		</td>
	    		<td className="Form-table-cell"> 
	    			<input 
			        type = "email" 
			        placeholder = "E-mail address" 
			        className= "InputArea" 
			        name="email" 	        
			    	/>
	    		</td>
	    		<td className="Form-table-cell"> 	
	    			<input 
			        type = "tel" 
			        placeholder = "Phone number" 
			        className= "InputArea" 
			        name="phone"		       
			    	/>
	    	  	</td>
	    	  	<td> 	
	    			<button className = "btn btn-primary" >Add new</button>
	    	  	</td>
	    	</tr>		    
             </table>  
        </form>
    );  
  }  
}

export default Form;
