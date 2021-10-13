import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        //TODO - set initial state for link name and URL 
        this.state = {name:'', URL:''}
        
    }

    handleChange = event => {
        //TODO - Logic for changing state based on form changes
        this.setState({
            name:event.target.value
        })
    }

    handleChangeURL = event =>{
        /* Had to make a separate handleChange for URL due to 
        OG handleChange not working for both Name and URL simultaneously */
        this.setState({
            URL:event.target.value
        })
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        //TODO - Logic for calling props to handle submission and setting state changes
        let anotherLink = {name: this.state.name, URL: this.state.URL};
        this.props.newEntry(anotherLink);

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>Name</label>
                <input type="text" value="name" value={this.state.name} onChange={this.handleChange}/>
                <label>URL</label>
                <input type="text" value="URL" value={this.state.URL} onChange={this.handleChangeURL}/>
                <button onClick={this.onFormSubmit}>Submit</button>
            </form>
        )
    
    }
}

export default Form;
