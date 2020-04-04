import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {

    render() {
        console.log(this.props.showModal + 'here');
        if(!this.props.showModal) {
            return (
                null
            )
        }
    
        if(this.props.showModal && this.props.modalErrorFlag) {
            return (
               <div className='showModal'>
                   <p className='errorMessage'>{this.props.modalErrorMsg}</p>
                   <div className='contents'>
                       <div>
                           <h3 className='modalMsg'>Are You 21 or Older?</h3>
                       </div>
                       <div className='replyBtn'>
                          <button className='yes' onClick={this.props.yesClicked}>YES</button>
                          <button className='no' onClick={this.props.noClicked}>NO</button>
                        </div>
                    </div>
                </div>  
            );
        }

        if(this.props.showModal) {
            return (
               <div className='showModal'>
                   <div className='contents'>
                       <div>
                           <h3 className='modalMsg'>Are You 21 or Older?</h3>
                       </div>
                       <div className='replyBtn'>
                          <button className='yes' onClick={this.props.yesClicked}>YES</button>
                          <button className='no' onClick={this.props.noClicked}>NO</button>
                        </div>
                    </div>
                </div>  
            );
        }
    } 
};

export default Modal;