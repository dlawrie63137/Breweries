import React, { Component } from 'react';
import axios from 'axios';
import './Search.css';
import Auxiliary from '../../hoc/Auxiliary';
import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navbar/Navbar';
import SearchForm from './SearchForm/SearchForm';
import Foot from '../../components/Foot/Foot';

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search_mode: 'name', // search by
            search_term: ' ', // search for
            buttonText: 'Search'
        }
        this.onTextChange=this.onTextChange.bind(this)
        this.radioHandler=this.radioHandler.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    render () {
        return (
            <Auxiliary>
                <div className='row'>
                    <div className='col-3'>
                        <Logo></Logo>
                    </div>

                    <div className='col-9'>
                         <Navbar></Navbar>
                    </div>
                </div>

                <div className='row'>
                    <div className='search-form'>
                        <SearchForm></SearchForm>
                    </div>
                </div>

                <div className='row'>
                    <div className='foot'>
                        <Foot></Foot>
                    </div>
                </div>
            </Auxiliary>

        );
    };


onTextChange(e) {
    const oldSearchTerm=e.target.value;

    /* The section below will be used when adding state variables to url string 

    const newSearchTerm=oldSearchTerm.replace(/ /g, "_")  // Replace spaces with underscore for search param
    const finalSearchTerm=newSearchTerm.replace(/\W+/g, "") // remove any special characters, leave numeric and alphabetic
    this.setState({search_term: finalSearchTerm}) // update state for search param
    
    */
   this.setState({search_term: oldSearchTerm}) // This will be removed if section above is used
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
    this.setState({buttonText: '... Searching'})

    if(this.state.search_mode === 'name') {

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
            "x-rapidapi-key":"9940fa354fmsh3c9129e25421805p1f9c49jsn4f68f8364738"
            },"params":{
             "by_state": this.state.search_term,
            }
            })
            .then((response)=>{
              console.log(response)
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
                  console.log(response.data)
                })
                .catch((error)=>{
                  console.log(error)
                })
        }
        setTimeout(function(){this.setState({buttonText: 'Search'})}.bind(this), 1000);
        
    };
};

export default Search;