import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import List from './List';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return (
            <div>
                <h1 className="jumbotron text-center">TO-DO APP</h1>
                <div className="col-sm-4 offset-sm-4" >
                    <form className="App" onSubmit={this.onSubmit}>
                        <div>
                            <button className="btn-primary">Submit</button>
                            <input value={this.state.term} onChange={this.onChange} />
                        </div>
                    </form>
                </div>
                <div className="offset-sm-4">
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
}
export default App