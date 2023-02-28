import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = {userName:'',city:''}
    onChangeHandler = (event)=> {
        // this.setState({userName:event.target.value})
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value}); //birden fazla form nesnesiyle çalışmak için
    }
    onSubmitHandler=(event)=>{
        event.preventDefault(); //bu kod bloğu default davranışı uygulamamak anlamına gelir.Yani gereksiz yere sayfanın yenilenmemesini sağlar. 
        alert(this.state.userName);
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>Username</h3>
            <input name = "userName" onChange = {this.onChangeHandler} type="text"></input>
            <h3>Username is {this.state.userName}</h3>

            <h3>City</h3>
            <input name = "city" onChange = {this.onChangeHandler} type="text"></input> 
            {/* name parametresi onchangehandlerda kullanılır */}
            <h3>City is {this.state.city}</h3>
            <input type="submit" value="Save"></input>
        </form>
      </div>
    )
  }
}
