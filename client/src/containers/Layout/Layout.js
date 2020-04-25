import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../components/Logo/Logo';
import Heading from '../../components/Heading/Heading';
import Image from '../../components/Main_img/Main_img';
import Modal from '../../UI/Modal/Modal';
import Caption from '../../components/Caption/Caption';
import Foot from '../../components/Foot/Foot';
import './Layout.css';

class Layout extends Component {
    constructor (props) {
        super (props);
        this.noClickHandler=this.noClickHandler.bind(this);
        
        this.state = {
            modalVisible: true,
            modalErrorFlag: false,
            modalErrorMsg: 'You must be at least 21 yrs. old!'
         }
    }
    
    componentDidMount() {
            // console.log('where is my modal?') Used for Testing
    };

    yesClickHandler = (e) => {
        // console.log('inside yesClickHandler') Used for Testing
        this.setState({modalVisible: false})
    }
    
    noClickHandler = (e) => {
        // console.log('inside noClickHandler') Used for Testing
        this.setState({modalErrorFlag: true})
    }

    render() {
        return (
            <Auxiliary>
                <div className='row logo'>
                    <div className='col-3'>
                        <Logo></Logo>
                    </div>

                    <div className='col-9'>
                         <Navbar showModal={this.state.modalVisible}></Navbar>
                    </div>
                </div>
            
                <div className='row'>
                    <div className='col-12'>
                        <Heading></Heading>
                    </div>
                </div>

                <div className='row image'>
                    <div className='col-12'>
                        <Image></Image>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <Caption></Caption>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <Modal
                            noClicked={this.noClickHandler}
                            yesClicked={this.yesClickHandler}
                            showModal={this.state.modalVisible}
                            modalErrorFlag={this.state.modalErrorFlag}
                            modalErrorMsg={this.state.modalErrorMsg}>
                        </Modal>
                    </div>
                </div>
                

                <div className='row foot'>
                    <div className='col-12'>
                        <Foot></Foot>
                    </div>
                </div>
            </Auxiliary>
        )
    }
    
};

export default Layout;