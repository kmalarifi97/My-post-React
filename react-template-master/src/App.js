import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import Card from './cards/card'
import SubmitCard from './cards/submitCard'
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'

class App extends Component {
  constructor () {
    super()

    this.state = {
      items: [],
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  renderSubmitCard(){
    if(this.state.user){
      return (
        <SubmitCard user={this.state.user} handleNewSubmit={this.handleNewSubmit} />
      );
    }
    return null
  }

  handleNewSubmit = (newItem) => {
    this.setState({items: [...this.state.items, newItem]})
  }

  updateItems = (items) => {
    this.setState({
      items
   
    });
  }
  render () {
    const { alerts, user } = this.state;
    return (
      
      <React.Fragment>
         
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser}  />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser}  />
            
          )} />
          {user ? <Card updateItems={this.updateItems} items={this.state.items} user={user}/> : null}
          
          
        {this.renderSubmitCard()}
         


{/*           
          <Route user={user} path='/card' render={() => (
            <Card  user={user} />
          )} /> */}
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
      </React.Fragment>
     
    )
  }
}

export default App
