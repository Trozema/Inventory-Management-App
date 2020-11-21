import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


//This Component Allow you to replace a database items Name//
class ReplaceName extends React.Component { 
	constructor(props) {
		super(props);
        this.ReplaceDB = this.ReplaceDB.bind(this);
        this.handleChange =this.handleChange.bind(this);
		this.state = {
             NameOld: "",
             NameNew: ""
			};
			
      }
      
      handleChange(event){
      
        this.setState({ [event.target.name]:event.target.value })
       
      }

ReplaceDB(event){
	
	event.preventDefault();
    const data = JSON.stringify({ Item1:this.state.NameOld, Item2:this.state.NameNew  })
     console.log(data)

     fetch('/replace', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: data,
        
    })
   
    
    alert("Name has been changed")
    
    
}

render(){

return(

<div>  
        <h2 class="PageHeading">Replace Product Name</h2>
        <Form id="ReplaceForm" onSubmit={this.ReplaceDB} style={{width:"50%",marginTop:"1%", marginLeft:"2%"}}>
            <Form.Group>
            <Form.Label>Enter Existing Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter existing product pame" id="NameOld" name="NameOld" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter New Name</Form.Label>
            <Form.Control type="text" placeholder="Enter new product name" id="NameNew" name="NameNew" onChange={this.handleChange}/>
            </Form.Group>            
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        </div>

)
}
}

export default ReplaceName;