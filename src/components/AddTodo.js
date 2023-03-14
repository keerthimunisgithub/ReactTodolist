import React,{Component} from "react";
export default class AddTodo extends Component{
state={
    Id:"",Title:"",Status:"Pending"
};



handleIDChange=(event)=>{
        console.log(event.target.value);
this.setState({
    Id: event.target.value
});
    };

handleTitleChange=(event)=>{
       // console.log(event.target.value);
this.setState({
    Title: event.target.value
});
    };

handleStatusChange=(event)=>{
      //  console.log(event.target.value);
    this.setState({
        Status: event.target.value
    });
    };
handleTodoSubmit=(event)=>{
    //event.preventDefault();
    this.props.onAdd({
        Id:this.state.Id,
        Title:this.state.Title,
        Status:this.state.Status
    });
    this.setState({
        Id:"",
        Title:"",
        Status:"Pending"
    });
};
render(){
return(
    <div>
        <h3>Add Todo</h3>
        <form onSubmit={this.handleTodoSubmit}>
            <div className="form-group">
                <input value={this.state.Id} onChange={this.handleIDChange} className="form-control" placeholder="Enter ID"></input>
            </div>
            <div className="form-group">
                <input value={this.state.Title} onChange={this.handleTitleChange} className="form-control" placeholder="Enter Title"></input>
            </div>
            <div className="form-group">
                <select value={this.state.Status} onChange={this.handleStatusChange} className="form-control">
                    <option value="Done">Done</option>
                    <option value="Pending">Pending</option></select>    </div>
                    <button type="Submit" className="form-control btn btn-primary"> Add Todo</button>
        </form>
    </div> 
);
}
}