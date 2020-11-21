import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


//This Component Allow you Update the item based on ID//
class EditItem extends React.Component { 
	constructor(props) {
		super(props);
        this.EditDB = this.EditDB.bind(this);
        this.handleChange =this.handleChange.bind(this);
		this.state = {
            ID:"",
            InventoryItem: "",
            Category: "",
            Staff:"",
            Quantity:"",
            UnitPrice: ""
			};
			
      }
      
      handleChange(event){
      
        this.setState({ [event.target.name]:event.target.value })
       
      }

EditDB(event){
	
	event.preventDefault();
    const data = JSON.stringify({ id:this.state.ID, InventoryItem:this.state.InventoryItem, Category:this.state.Category, Staff:this.state.Staff, Quantity:this.state.Quantity, UnitPrice:this.state.UnitPrice  })
     console.log(data)

     fetch('/update', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: data,
        
    })
   
    alert("Item has been changed")
    
    
}

render(){

return(

<div>
      <h2 class="PageHeading">Edit Item by ID</h2>
    <Form id="AddForm" onSubmit={this.EditDB} style={{width:"50%",marginTop:"1%", marginLeft:"2%"}}>
            <Form.Group>
            <Form.Label>Enter ID of item you want to edit</Form.Label>
            <Form.Control type="text" placeholder="Enter ID" id="ID" name="ID" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter Item Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Inventory Item" id="InventoryItem" name="InventoryItem" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter Category</Form.Label>
            <Form.Control type="text" placeholder="Enter Category" id="Category" name="Category" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter Staff Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Staff Name" id="Staff" name="Staff" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter Quantity</Form.Label>
            <Form.Control type="text" placeholder="Enter Item Quantity" id="Quantity" name="Quantity" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter Unit Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Price" id="UnitPrice" name="UnitPrice" onChange={this.handleChange}/>
            </Form.Group>
            
            
    
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>

</div>

)}
	

}
export default EditItem;