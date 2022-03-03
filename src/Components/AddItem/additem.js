import React, {Component} from 'react'
import './additem.css'
class AddItem extends Component{
    state = {
        name:'',
        age:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name !== '' & this.state.age !== ''){
            this.props.AddItem(this.state);
            this.setState({
                name:'',
                age:''
            })
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Username' id='name' onChange={this.handleChange} value={this.state.name}/>
                    <input type='number' placeholder='age' id='age' onChange={this.handleChange} value={this.state.age}/>
                    <input type='submit' value='Add' />
                </form>
            </div>
        );
    }
}

export default AddItem;