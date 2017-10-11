import React from 'react';
import ReactDOM from 'react-dom';
import IssueListComponent from './issueListComponent';

class HeaderComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: "Yash Technologies Inc",
            logo: "Yash",
            appMessage: "Issue Tracker"
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.headerText}</h1>
                <h2>{this.state.logo}</h2>
                <hr />
                <h2>{this.state.appMessage}</h2>
                <hr />
                <IssueListComponent />
            </div>
        )
    }
}
export default HeaderComponent;

