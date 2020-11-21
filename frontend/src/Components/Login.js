import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

//This is the List of DB items//
class LoginPage extends React.Component {
    constructor(props) {
          super(props);
          this.Login = this.Login.bind(this);
          
          this.handleChange =this.handleChange.bind(this);
          this.state = {
        Usr: "",
        Pwd: "",
        token: "",
        };
        }


        handleChange(event){
      
            this.setState({ [event.target.name]:event.target.value })
           
          }
    

//This function passes the username and password to express and checks if the details are valid//

    Login(event){
	
            event.preventDefault();
            const data = JSON.stringify({ username:this.state.Usr, password:this.state.Pwd })
             console.log(data)
             
             fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: data,
                
            }).then(res => res.json())
            .then(
                (Newdata) => {
                this.setState({
                token: Newdata.token
                }); 
                
                if(this.state.token === "eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiVGhvbWFzIiwiYWRtaW4iOnRydWV9.zuOlkn_c0fVtYhI7abRG63DSouXSymyNMLsLNB_3sj0"){
                    window.location.assign("/eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiVGhvbWFzIiwiYWRtaW4iOnRydWV9.zuOlkn_c0fVtYhI7abRG63DSouXSymyNMLsLNB_3sj0")
                    console.log(this.state.token)
                } else if (Newdata.token === "eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9obiIsImFkbWluIjpmYWxzZX0.L0U5KKqNReKzCZYWCosVhTXkHvNJhBO4mSxVU296Pns"){
                    window.location.assign("/eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9obiIsImFkbWluIjpmYWxzZX0.L0U5KKqNReKzCZYWCosVhTXkHvNJhBO4mSxVU296Pns")
                } else {
                    alert("Invalid Details")
                }
                })
                
        
        
        }



      render() {

        
        return(

      <div>
 
    <Form id="AddForm" onSubmit={this.Login} style={{width:"50%",textAlign:"Center",marginLeft:"25%",marginTop:"5%"}}>
        <Form.Group>
        <Form.Label>Enter Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" id="Usr" name="Usr" onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="text" placeholder="Enter password" id="Pwd" name="Pwd" onChange={this.handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" >
            Login
        </Button>
    </Form>
    </div>
        )
    }
}


  
  
  export default LoginPage