import React from 'react';
import ReactDOM from 'react-dom';

class IssueListItemComponent extends React.Component{
    constructor(){
        super();
        this.updateIssue = this.updateIssue.bind(this);
        this.toggleListItem = this.toggleListItem.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderIssue = this.renderIssue.bind(this);
        this.state={
            isEditing: false
        }
    }
    updateIssue(event){
        event.preventDefault();
        this.props.editIssue(this.props.index,this.input.value);
        this.toggleListItem();
    }
    toggleListItem(){

        const {isEditing} = this.state;      
        this.setState({
            isEditing: !isEditing
        })
    }
    renderForm(){
        return(
            <form onSubmit={this.updateIssue}>
            <input
                type="text" 
                defaultValue={this.props.issue.name}
                ref ={(value)=>{this.input= value;}} /> &nbsp;
            <button>Update</button>
            </form> 
        );
    }
    renderIssue(){
        return(
            <li onClick={()=>{
                this.props.clickHandler(this.props.index)
                }} 
                    className ={this.props.issue.completed ? 'completed':''}>
                {this.props.issue.name} &nbsp; 
                <button onClick ={ (event)=>{
                    event.stopPropagation();//to stop one event
                    this.props.deleteIssue(this.props.index)
                }}>X</button> &nbsp;
                <button onClick ={(event)=>{
                    event.stopPropagation();//to stop one event
                    this.toggleListItem();
                    }}>EDIT</button>
            </li> 
        );
    }
    render(){

        const {isEditing} = this.state;
        return (
                <section>
                         {isEditing ? this.renderForm (): this.renderIssue()}
                </section>
        );
    }
}
export default IssueListItemComponent;