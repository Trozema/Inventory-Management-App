import React from 'react';
import MainCard from './MainCards';
import '../Styles.css'


//This is the List of Items that is filtered//
class FilterPage extends React.Component {
    constructor(props) {
          super(props);
          this.componentDidMount = this.componentDidMount.bind(this);
          this.state = {
        isLoaded: false,
        MainItems: [],
        };
        }

        componentDidMount() {
            fetch(`/filter`)
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
        <div class="FilterTitle">          
      <h2>Low Stock Items</h2>
      <p>These are items with less than 20 units in stock</p>
      </div>    
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
  
  
  
       
       
      
      
  
  
  export default FilterPage