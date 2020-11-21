import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


//This Component Allow you to Delete a database item using the owners name//
class DeleteItem extends React.Component { 
	constructor(props) {
		super(props);
        this.DeleteFromDB = this.DeleteFromDB.bind(this);
        this.handleChange =this.handleChange.bind(this);
		this.state = {
            Name:"",
			};
			
      }
      
      handleChange(event){
      
        this.setState({ [event.target.name]:event.target.value })
       
      }

DeleteFromDB(event){
	
	event.preventDefault();
    const data = JSON.stringify({  Name:this.state.Name })
     console.log(data)

     fetch('/delete', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: data,
        
    })
   
    alert("Item has been deleted")
    
    
}

render(){

return(

<div>

<div>
      
        <h2 class="PageHeading">Delete Item</h2>
        <Form id="AddForm" onSubmit={this.DeleteFromDB} style={{width:"50%",marginTop:"1%", marginLeft:"2%"}}>
            <Form.Group>
            <Form.Label>Enter Item Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Item Name" id="Name" name="Name" onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        </div>

</div>

)}
	

}
export default DeleteItem;