import React, {Component} from 'react'
import TodoItems from './Components/TodoItems/todoitems.js'
import AddItem from './Components/AddItem/additem.js'

class App extends Component{
  state = {
    items: [
      {id: 1, name:'Sayed', age:21},
      {id: 2, name:'Ahmed', age:22},
      {id: 3, name:'Mohamed', age:23}
    ]
  }
  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    })
    this.setState({items})
  }

  AddItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render(){
    return (
      <div className="App container">
        <h1 className='text-center'>Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem AddItem = {this.AddItem}/>
      </div>
    );
  }
}

export default App;
