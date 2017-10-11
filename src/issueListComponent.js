import React from 'react';
import ReactDOM from 'react-dom';
import IssueListItemComponent from './issueListItemComponent';
import IssueForm from './issueForm';


class IssueListComponent extends React.Component {
    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.updateState = this.updateState.bind(this);
        this.deleteIssue = this.deleteIssue.bind(this);
        this.editIssue = this.editIssue.bind(this);
        this.addIssue = this.addIssue.bind(this);
        this.state = {
            issues: [
                { name: 'Issue-1', completed: true },
                { name: 'Issue-2', completed: false },
                { name: 'Issue-3', completed: false },
                { name: 'Issue-4', completed: false },
                { name: 'Issue-5', completed: false }
            ],
            currentIssue: ''
        }
    }
    editIssue(index, valueToBeUpdated) {
        let issues = this.state.issues;
        let currentIssue = issues[index];
        currentIssue['name'] = valueToBeUpdated;
        this.setState({
            issues
        })
    }
    changeStatus(index) {
        var issues = this.state.issues;
        var issue = issues[index];
        issue.completed = !issue.completed;
        this.setState({
            issues: issues
        })
    }
    updateState(newValue) {
        this.setState({
            currentIssue: newValue.target.value
        })
    }
    deleteIssue(itemToBeDeleted) {
        let issues = this.state.issues;
        issues.splice(itemToBeDeleted, 1);
        this.setState({
            issues
        })
    }
    addIssue(event) {
        event.preventDefault(); //this will stop page refresh
        var issues = this.state.issues;
        var currentIssue = this.state.currentIssue;
        issues.push({
            name: currentIssue,
            completed: false
        });
        this.setState({
            issues,
            currentIssue: ''
        })
    }
    render() {
        return (
            <div>
                <IssueForm currentIssue={this.state.currentIssue}
                    updateState={this.updateState} addIssue={this.addIssue} />
                <ul>
                    {
                        this.state.issues.map((issue, index) => {
                            return (<IssueListItemComponent 
                                key={issue.name} issue={issue}
                                clickHandler={this.changeStatus}
                                deleteIssue={this.deleteIssue}
                                 editIssue={this.editIssue} 
                                 index={index} />)
                        }
                        )}
                </ul>
            </div>
        );
    }
}
export default IssueListComponent;