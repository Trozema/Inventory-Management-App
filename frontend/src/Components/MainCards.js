import React from "react";

import Card from 'react-bootstrap/Card';

//This is the Main Cards component//
class MainCard extends React.Component { 

render(){

	

	const ItemId = this.props.id
    const ItemName = this.props.InventoryItem
    const ItemCategory = this.props.Category
    const StaffMember = this.props.Staff
    const Amount= this.props.Quantity
    const Price= this.props.UnitPrice

return(

<div class="cardItem">
	 <Card style={{ width: '100%'}}>
 <Card.Body style={{display:"inline-flex", marginLeft:"20px"}}>
   
   <Card.Subtitle style={{border:"2px solid black", padding:"1%"}} className="mb-2 text-muted">ID: {ItemId}</Card.Subtitle>
   <Card.Subtitle style={{marginLeft:"20px", border:"2px solid Grey", padding:"1%"}} className="mb-2 text-muted">Item: {ItemName}</Card.Subtitle>
   <Card.Subtitle style={{marginLeft:"20px", border:"2px solid lightblue", padding:"1%"}} className="mb-2 text-muted">Category: {ItemCategory}</Card.Subtitle>
   <Card.Subtitle style={{marginLeft:"20px", border:"2px solid Blue", padding:"1%"}} className="mb-2 text-muted">Staff Responsible: {StaffMember}</Card.Subtitle>
   <Card.Subtitle style={{marginLeft:"20px", border:"2px solid Purple", padding:"1%"}} className="mb-2 text-muted">Quantity: {Amount}</Card.Subtitle>
   <Card.Subtitle style={{marginLeft:"20px", border:"2px solid Black", padding:"1%"}} className="mb-2 text-muted">UnitPrice: {Price}</Card.Subtitle>
 </Card.Body>
</Card>
</div>




)






	}
	

}
export default MainCard;