import React from 'react';
const IssueForm = (props) => {
    return (
        <form onSubmit={props.addIssue}>
            <input type="text"
             value={props.currentIssue} 
             onChange={props.updateState} />
            &nbsp;<button type = "submit">Add</button>
        </form>
    )
}
export default IssueForm;