import React, {Component} from 'react';  

/* Import Components */
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button'

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        gender: '',
        city:'',
        email: '',
        phone: '',
        about: '',
        support:''

      },

      genderOptions: ['Male', 'Female'],

    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleSupport = this.handleSupport.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */
  
  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, name: value
        }
      }), () => console.log(this.state.newUser))
  }

    handleCity(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, city: value
                }
        }), () => console.log(this.state.newUser))
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, email: value
                }
        }), () => console.log(this.state.newUser))
    }

    handlePhone(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, phone: value
                }
        }), () => console.log(this.state.newUser))
    }

    handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
      }), ()=>console.log(this.state.newUser))
  }
    handleSupport(e) {
        console.log("Inside handleSupport");
        let value = e.target.value;
        this.setState(prevState => ({
            newUser: {
                ...prevState.newUser, support: value
            }
        }), ()=>console.log(this.state.newUser))
    }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }   

  handleClearForm(e) {
  
      e.preventDefault();
      this.setState({ 
        newUser: {
          name: '',
          gender: '',
          city:'',
          email: '',
          phone: '',
          about: '',
          support:''
        },
      })
  }

  render() {
    return (
    
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
       
            <Input inputType={'text'}
                   title= {'Candidate name: '}
                   name= {'name'}
                   value={this.state.newUser.name} 
                   placeholder = {'Enter your name'}
                   handleChange = {this.handleInput}
                   
                   /> {/* Name of the user */}

            <Select title={'Gender'}
                    name={'gender'}
                    options = {this.state.genderOptions}
                    value = {this.state.newUser.gender}
                    placeholder = {'Select Gender'}
                    handleChange = {this.handleInput}
            /> {/* Gender Selection */}

            <Input inputType={'city'}
                   title= {'Candidate City: '}
                   name= {'City'}
                   value={this.state.newUser.city}
                   placeholder = {'Enter your city'}
                   handleChange = {this.handleCity}

            /> {/* City of the user */}

            <Input inputType={'email'}
                   title= {'Candidate email: '}
                   name= {'email'}
                   value={this.state.newUser.email}
                   placeholder = {'Enter your email'}
                   handleChange = {this.handleEmail}

            /> {/* Email of the user */}

            <Input inputType={'number'}
                   title= {'Candidate Phone: '}
                   name= {'phone'}
                   value={this.state.newUser.phone}
                   placeholder = {'Enter your phone'}
                   handleChange = {this.handlePhone}

            />{" "}{/* Phone of the user */}

          <TextArea
            title={'Brief idea description'}
            rows={10}
            value={this.state.newUser.about}
            name={'IdeaInfo'}
            handleChange={this.handleTextArea}
            placeholder={'Describe your idea in a few words'}

          />{/* Idea Description */}

            <TextArea
                title={'Support needed'}
                rows={10}
                value={this.state.newUser.support}
                name={'SupportInfo'}
                handleChange={this.handleSupport}
                placeholder={'Please describe what kind of support you need'}

            />{/* Support needed */}

          <Button 
              action = {this.handleFormSubmit}
              type = {'primary'} 
              title = {'Submit'} 
            style={buttonStyle}
          /> { /*Submit */ }
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}
          
        </form>
  
    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer;