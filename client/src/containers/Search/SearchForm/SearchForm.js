import React, { Component } from 'react';
import './SearchForm.css';
import Auxiliary from '../../../hoc/Auxiliary';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_mode: '',
            search_term: '',
            buttonText: 'Search'
        }
      }

    
    render() {
        return(
            <Auxiliary>
                <div className='row'>
                    <div className='col-12'>
                        <h2><u>Find A Brewery</u></h2>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <h3>Search by:</h3>
                    </div>
                </div>

                <form id='search-form' onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className='row'>
                        <div className='col-12 rad-btns'>
                            <input type='radio' id='search_name' name ='search' value='name' onChange={this.radioHandler.bind(this)} defaultChecked></input>
                            <label htmlFor='search_name'>Name</label><br />
                            <input type='radio' id='search_state' name ='search' value='state'></input>
                            <label htmlFor='search_name'>State</label><br />
                            <input type='radio' id='search_city' name ='search' value='city' onChange={this.radioHandler.bind(this)}></input>
                            <label htmlFor='search_name'>City</label><br />
                            <input type='radio' id='search_zip' name ='search' value='zip'></input>
                            <label htmlFor='search_name'>Zip</label>
                        </div>
                    </div>
                
                    <div className='row'>
                        <div className='col-12'>
                            <input type='text' className='search' value={this.props.search_term} placeholder='Search Term' onChange={this.onTextChange.bind(this)}></input>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <button type="submit" className="btn btn-primary">{this.state.buttonText}</button>
                        </div>
                    </div>
                </form>
            </Auxiliary>

        );
    };
    
    onTextChange(event) {
    this.setState({search_term: event.target.value})
    };

    radioHandler (e) {

    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({buttonText: '... Searching'})

        //if ()
    };
};


export default SearchForm;