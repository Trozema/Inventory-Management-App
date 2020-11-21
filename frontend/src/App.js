import React from 'react';
import TopNav from './Components/TopNav';
import HomePage from './Components/HomePage'
import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddItem from './Components/AddItem';
import DeleteItem from './Components/DeleteItem';
import EditItem from './Components/UpdateItem'
import ReplaceName from './Components/Replace';
import FilterPage from './Components/FilterPage';
import LoginPage from './Components/Login'


const Login = () => <div><LoginPage></LoginPage></div>
const MainPage = () => <div><TopNav></TopNav><HomePage></HomePage></div>
const AddItemPage = () => <div><TopNav></TopNav><AddItem></AddItem></div>
const DeleteItemPage = () => <div><TopNav></TopNav><DeleteItem></DeleteItem></div>
const EditItemPage = () => <div><TopNav></TopNav><EditItem></EditItem></div>
const ReplaceOwnerPage = () => <div><TopNav></TopNav><ReplaceName></ReplaceName></div>
const FilterMainPage = () => <div><TopNav></TopNav><FilterPage></FilterPage></div>








class App extends React.Component {
  render(){
    return(
      <div>
      <BrowserRouter>
      <Route exact={true} path="/" component={Login} />
      <Route exact={true} path="/eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiVGhvbWFzIiwiYWRtaW4iOnRydWV9.zuOlkn_c0fVtYhI7abRG63DSouXSymyNMLsLNB_3sj0" component={MainPage} />
      <Route exact={true} path="/eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9obiIsImFkbWluIjpmYWxzZX0.L0U5KKqNReKzCZYWCosVhTXkHvNJhBO4mSxVU296Pns" component={MainPage} />
      <Route exact={true} path="/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ" component={MainPage} />
      <Route exact={true} path="/Add" component={AddItemPage} />
      <Route exact={true} path="/Delete" component={DeleteItemPage} />
      <Route exact={true} path="/Edit" component={EditItemPage} />
      <Route exact={true} path="/Replace" component={ReplaceOwnerPage} />
      <Route exact={true} path="/Filter" component={FilterMainPage} />
      </BrowserRouter>
      </div>

    )
  }
}

export default App;