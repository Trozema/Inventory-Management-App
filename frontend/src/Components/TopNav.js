import React from 'react';

//This is the navigation bar which uses react bootstrap//
import {Navbar, Nav, NavDropdown,} from 'react-bootstrap';

function TopNav(props){
  
    return(
      
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ">Inventory Management App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
      <Nav.Link href="/Add">Add Stock Item</Nav.Link>  
      <Nav.Link href="/Edit">Edit Stock Item</Nav.Link> 
      <Nav.Link href="/Replace">Replace Item Name</Nav.Link> 
      <Nav.Link href="/Delete">Delete Item</Nav.Link> 
      <Nav.Link href="/Filter">Low Stock Items</Nav.Link> 
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}


  

export default TopNav;
