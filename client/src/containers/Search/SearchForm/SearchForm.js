import React, { Component } from 'react';
import './SearchForm.css';
import DisplayMap from '../DisplayMap/DisplayMap';
import Auxiliary from '../../../hoc/Auxiliary';
import axios from 'axios';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_mode: 'name', // search by
            search_term: '', // search for
            queryResponse: [], // axios response
            buttonText: 'Search'
        }
    };

        

    render() {
        if(this.state.queryResponse.length>0) {   //if search returns populated list show map
        
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

                <div className='row'>
                    <div className='col-12'>
                        <form id='search-form' onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className='col-12 rad-btns'>
                                <div className='form-check'>
                                    <input 
                                        type='radio' 
                                        id='search_name' 
                                        name ='search' 
                                        value='name' 
                                        checked={this.state.search_mode==='name'}
                                        onChange={this.radioHandler.bind(this)}
                                        className='form-check-input'>
                                    </input>
                                    <label htmlFor='search_name'>Name</label><br />
                                </div>
                                <div className='form-check'>
                                    <input 
                                        type='radio' 
                                        id='search_state' 
                                        name ='search' 
                                        value='state'
                                        checked={this.state.search_mode==='state'}
                                        onChange={this.radioHandler.bind(this)}
                                        className='form-check-input'>
                                    </input>
                                    <label htmlFor='search_name'>State</label><br />
                                </div>
                                <div className='form-check'>
                                    <input 
                                        type='radio' 
                                        id='search_city' 
                                        name ='search' 
                                        value='city' 
                                        checked={this.state.search_mode==='city'}
                                        onChange={this.radioHandler.bind(this)}
                                        className='form-check-input'>
                                    </input>
                                    <label htmlFor='search_name'>City</label><br />
                                </div>
                                <div className='form-check'>
                                    <input 
                                        type='radio' 
                                        id='search_zip' 
                                        name ='search' 
                                        value='zip'
                                        checked={this.state.search_mode==='zip'}
                                        onChange={this.radioHandler.bind(this)}
                                        className='form-check-input'>
                                    </input>
                                    <label htmlFor='search_name'>Zip</label>
                                </div>
                                
                            </div>

                            <div className='row'>
                                <div className='col-12'>
                                    <input type='text' className='search' value={this.state.search_term} placeholder='Search Term' onChange={this.onTextChange.bind(this)}></input>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12'>
                                    <button type="submit" className="btn btn-primary">{this.state.buttonText}</button>
                                </div>
                            </div>
                        </form>
                        <div className='row'>
                            <div className='col-12'>
                                <DisplayMap 
                                    search_mode={this.state.search_mode}
                                    search_term={this.state.search_term}
                                    queryResponse={this.state.queryResponse}>
                                </DisplayMap>
                            </div>
                        </div>
                    </div>
                </div>
                   
            </Auxiliary>

        );
    }else { // if search results empty or on initial load hide map
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

                <div className='row'>
                    <div className='col-12'>
                        <form id='search-form' onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className='col-12 rad-btns'>
                                <div className='form-check'>
                                    <input 
                                        type='radio' 
                                        id='search_name' 
                                        name ='search' 
                                        value='name' 
                                        checked={this.state.search_mode==='name'}
                                        onChange={this.radioHandler.bind(this)}
                                        className='form-check-input'>
                                    </input>
                                    <label htmlFor='search_name'>Name</label><br />
                                </div>
                                <div className='form-check'>
                                    <input 
                                        type='radio' 
                                        id='search_state' 
                                        name ='search' 
                                        value='state'
                                        checked={this.state.search_mode==='state'}
                                        onChange={this.radioHandler.bind(this)}
                                        className='form-check-input'>
                                    </input>
                                    <label htmlFor='search_name'>State</label><br />
                                </div>
                                <div className='form-check'>
                                    <input 
                                        type='radio' 
                                        id='search_city' 
                                        name ='search' 
                                        value='city' 
                                        checked={this.state.search_mode==='city'}
                                        onChange={this.radioHandler.bind(this)}
                                        className='form-check-input'>
                                    </input>
                                    <label htmlFor='search_name'>City</label><br />
                                </div>
                                <div className='form-check'>
                                    <input 
                                        type='radio' 
                                        id='search_zip' 
                                        name ='search' 
                                        value='zip'
                                        checked={this.state.search_mode==='zip'}
                                        onChange={this.radioHandler.bind(this)}
                                        className='form-check-input'>
                                    </input>
                                    <label htmlFor='search_name'>Zip</label>
                                </div>
                                
                            </div>

                            <div className='row'>
                                <div className='col-12'>
                                    <input type='search' className='search' autoFocus={true} value={this.state.search_term} placeholder='Search Term' onChange={this.onTextChange.bind(this)}></input>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12'>
                                    <button type="submit" className="btn btn-primary">{this.state.buttonText}</button>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
                   
            </Auxiliary>

        );
    }
    };
    
    onTextChange(e) {
        e.preventDefault();
                        
        this.setState({
            search_term: e.target.value
        })
        
    };

    radioHandler (e) {
        this.setState({
            search_mode:e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.search_mode) Used for testing
        // console.log(this.state.search_term) Used for testing

        // Check buttonText state for resetting page
        if(this.state.buttonText === 'Reset') {
            window.location.reload(false);
            this.setState({buttonText: 'Search'})
        } else {
        this.setState({buttonText: '... Searching'})

        if(this.state.search_mode === 'name') {     // axios search by name

            let url="https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries"
                       
            axios({
                "method":"GET",
                "url":url,
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"brianiswu-open-brewery-db-v1.p.rapidapi.com",
                "x-rapidapi-key":"9940fa354fmsh3c9129e25421805p1f9c49jsn4f68f8364738"
                },"params":{
                 "by_name": this.state.search_term,
                }
                })
                .then((response)=>{
                  console.log(response)
                  this.setState({queryResponse: response.data})
                  //console.log(this.state.queryResponse)
                })
                .catch((error)=>{
                  console.log(error)
                })
                
            }else if(this.state.search_mode === 'state') {

                let url="https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries"
                       
            axios({
                "method":"GET",
                "url":url,
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"brianiswu-open-brewery-db-v1.p.rapidapi.com",
                "x-rapidapi-key":"9940fa354fmsh3c9129e25421805p1f9c49jsn4f68f8364738",
                "useQueryString":true
                },"params":{
                 "by_state": this.state.search_term,
                }
                })
                .then((response)=>{
                  console.log(response) //For testing
                  this.setState({queryResponse: response.data})
                })
                .catch((error)=>{
                  console.log(error)
                })
            }else {

                let url="https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search"

                axios({
                    "method":"GET",
                    "url":url,
                    "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"brianiswu-open-brewery-db-v1.p.rapidapi.com",
                    "x-rapidapi-key":"9940fa354fmsh3c9129e25421805p1f9c49jsn4f68f8364738"
                    },"params":{
                     "query": this.state.search_term,
                    }
                    })
                    .then((response)=>{
                      console.log(response.data) //For testing
                      this.setState({queryResponse: response.data})
                      
                      //console.log(this.state.queryResponse)
                  })
                    .catch((error)=>{
                      console.log(error)
                    })
                }
            }
            setTimeout(function(){this.setState({buttonText: 'Reset'})}.bind(this), 1000);
        };
        
    };

export default SearchForm;