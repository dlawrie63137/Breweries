import React, { Component } from 'react';
import './Search.css';
import Auxiliary from '../../hoc/Auxiliary';
import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navbar/Navbar';
import SearchForm from './SearchForm/SearchForm';
import Foot from '../../components/Foot/Foot';

class Search extends Component {

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
};

export default Search;