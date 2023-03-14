import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import AddTodo from "./AddTodo";
export default class Todolist extends Component{
    state={
        todos:[
            { Id:'1',Title:'Push your code to github',Status:'Done'},
            { Id:'2',Title:'Email to your Manager',Status:'Pending'}
        ]
    };
    deleteTodo=(todo)=>{
        const filteredItems=this.state.todos.filter(x=>x.Id!== todo.Id);
        this.setState({
            todos: filteredItems
        });
    };
    addTodo=(todo)=>{
      this.setState({
        todo:[...this.state.todos,todo]
      }); 
    };
    editTodo=(x)=>{
        this.setState(state=>({
            todos:state.todos.map(todo=>{
                if(todo.Id===x.Id){
                    return{
                        ...todo,
                        Status:todo.Status==="Done"?"Pending":"Done"                    
                    };
             } else{
                return todo;
            }
            })
        }));
    };
    render(){
        return(
            <div>
                <AddTodo onAdd={this.addTodo}></AddTodo>
                <h1>Todolist</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(x=>{
                            return(
                                <tr key={x.Id}>
                                    <td>{x.Id}</td>
                                    <td>{x.Title}</td>
                                    <td style={{color:x.Status==="Done" ? "green":"red"}}>{x.Status}</td>
                                    <td><button className="btn btn-primary" onClick={()=>this.deleteTodo(x)}>
                                        <span><FontAwesomeIcon icon="trash"></FontAwesomeIcon></span></button>
                                    <button className="btn btn-primary" onClick={()=>this.editTodo(x)}>
                                        <span><FontAwesomeIcon icon="edit"></FontAwesomeIcon></span></button>
                                    </td>
                                </tr>
                            );
                        }) };
                    </tbody>
                </table>
                
            </div>
        );
    }
}