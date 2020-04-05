import React, { Component } from 'react';
import axios from 'axios';
import './ContactForm.css';

class contactForm extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            email: '',
            buttonText: 'Send Message'
        }
      }

    render() {
     return(
        <div className="container-contact">
           <div className='row'>
             <div className='col-12 contactForm'>
                 <p>Or just fill out the form below:</p>               
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder='Name' value={this.state.name} onChange={this.onNameChange.bind(this)} />
                       </div>

                       <div className="form-group">
                            <input type="email" className="form-control" placeholder='Email Address' aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>

                        <div className="form-group">
                            <textarea 
                                className="form-control" 
                                rows="5" value={this.state.message} 
                                onChange={this.onMessageChange.bind(this)}
                                placeholder="Write Your Message Here" />
                        </div>
            
                        <button type="submit" className="btn btn-primary">{this.state.buttonText}</button>
                    </form>
                  </div>
                </div>
            </div>
     );
    }
    
      onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }

      handleSubmit(e){
        e.preventDefault();
        this.setState({buttonText: '... Sending'})
        
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

        
  resetForm(){
    
    this.setState({
      name: "", 
      email: '', 
      message: '',
      buttonText: 'Send Message'
    })
 }
};

    
export default contactForm;