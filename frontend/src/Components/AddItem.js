import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles.css'


//This is the component that add items to the DB//
class AddItem extends React.Component { 
	constructor(props) {
		super(props);
        this.AddToDB = this.AddToDB.bind(this);
        this.handleChange =this.handleChange.bind(this);
		this.state = {
            Name: "",
            Category: "",
            Staff:"",
            Quantity:"",
            Price: ""
			};		
      }
      
      handleChange(event){
      
        this.setState({ [event.target.name]:event.target.value })
       
      }



AddToDB(event){
	
	event.preventDefault();
    const data = JSON.stringify({ Name:this.state.Name, Category:this.state.Category, Staff:this.state.Staff, Quantity:this.state.Quantity, Price:this.state.Price })
     console.log(data)

     fetch('/add', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data,
        
    })
   
    
    alert("New Item has been added")
    
    
}

render(){

return(


<div>
    
        
        <h2 class="PageHeading">Add Inventory Item</h2>
        <Form id="AddForm" onSubmit={this.AddToDB} style={{width:"50%",marginTop:"1%", marginLeft:"2%"}}>
            <Form.Group>
            <Form.Label>Enter Item Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" id="Name" name="Name" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter Category</Form.Label>
            <Form.Control type="text" placeholder="Enter Category" id="Category" name="Category" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter Staff Memeber</Form.Label>
            <Form.Control type="text" placeholder="Enter Staff" id="Staff" name="Staff" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter Quantity</Form.Label>
            <Form.Control type="text" placeholder="Enter Quantity" id="Quantity" name="Quantity" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter Unit Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Price" id="Price" name="Price" onChange={this.handleChange}/>
            </Form.Group>
            
            
    
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        </div>



)}	

}
export default AddItem;