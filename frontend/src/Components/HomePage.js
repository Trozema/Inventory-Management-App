import React from 'react';
import MainCard from './MainCards';
import '../Styles.css'

//This is the List of DB items//
class MainPage extends React.Component {
    constructor(props) {
          super(props);
          this.componentDidMount = this.componentDidMount.bind(this);
          this.state = {
        isLoaded: false,
        MainItems: [],
        };
        }

        componentDidMount() {
            fetch(`/Item`)
            .then(res => res.json())
            .then(
            (data) => {
            this.setState({
            isLoaded: true,
            MainItems: data
            }); 
            
          })}

        
      render() {
        const { MainItems, isLoaded } = this.state;
        console.log(MainItems)
        if (!isLoaded) {
            return <div>Loading...
            </div>;
            
            } else { 
              
              
            return (
                <div>
                  
     <h2 id="title">Inventory List</h2>
      {MainItems.map((items, index) => (
       <MainCard
       key={index}
       id={items._id}
       InventoryItem={items.InventoryItem} 
       Category={items.Category}
       Staff={items.Staff}
       Quantity={items.Quantity}
       UnitPrice={items.UnitPrice}
       />))}    
      
       
      </div>
            )
    }}
}  
  
  
  
       
       
      
      
  
  
  export default MainPage