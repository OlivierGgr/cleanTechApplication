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
        email: '',
        phone: '',
        companyName:'',
        companySite:'',
        repName: '',
        repEmail: '',
        repPhone: '',
        reason: '',
      },

      genderOptions: ['Male', 'Female'],

    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCompanyName = this.handleCompanyName.bind(this);
    this.handleCompanySite = this.handleCompanySite.bind(this);
    this.handleRepName = this.handleRepName.bind(this);
    this.handleRepEmail = this.handleRepEmail.bind(this);
    this.handleRepPhone = this.handleRepPhone.bind(this);
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

    handleCompanyName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, companyName: value
                }
        }), () => console.log(this.state.newUser))
    }

    handleCompanySite(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, companySite: value
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

    handleRepEmail(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, repEmail: value
                }
        }), () => console.log(this.state.newUser))
    }

    handleRepPhone(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, repPhone: value
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

    handleRepName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, repName: value
                }
        }), () => console.log(this.state.newUser))
    }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, reason: value
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
          companyName:'',
          companySite:'',
          repName: '',
          repEmail: '',
          repPhone: '',
          email: '',
          phone: '',
          reason: '',
        },
      })
  }

  render() {
    return (
    
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
       
            <Input inputType={'text'}
                   title= {'Applicant name: '}
                   name= {'name'}
                   value={this.state.newUser.name}
                   placeholder = {'Name of the person submitting the application'}
                   handleChange = {this.handleInput}
                   
                   /> {/* Name of the user */}

            <Select title={'Gender'}
                    name={'gender'}
                    options = {this.state.genderOptions}
                    value = {this.state.newUser.gender}
                    placeholder = {'Select Gender'}
                    handleChange = {this.handleInput}
            /> {/* Gender Selection */}

            <Input inputType={'email'}
                   title= {'Applicant email: '}
                   name= {'email'}
                   value={this.state.newUser.email}
                   placeholder = {'Enter your email'}
                   handleChange = {this.handleEmail}

            /> {/* Email of the user */}

            <Input inputType={'number'}
                   title= {'Applicant phone: '}
                   name= {'phone'}
                   value={this.state.newUser.phone}
                   placeholder = {'Enter your phone'}
                   handleChange = {this.handlePhone}

            />{" "}{/* Phone of the user */}

            <Input inputType={'Company name'}
                   title= {'Company name: '}
                   name= {'Company name'}
                   value={this.state.newUser.companyName}
                   placeholder = {'Enter Company Name'}
                   handleChange = {this.handleCompanyName}

            /> {/* Name of the Company */}

            <Input inputType={'website'}
                   title= {'Company website: '}
                   name= {'Company website'}
                   value={this.state.newUser.companySite}
                   placeholder = {'Enter Company Website'}
                   handleChange = {this.handleCompanySite}

            /> {/* Site of the Company */}

            <Input inputType={'text'}
                   title= {'Name of representative: '}
                   name= {'RepName'}
                   value={this.state.newUser.repName}
                   placeholder = {'Name of the company representative'}
                   handleChange = {this.handleRepName}

            /> {/* Name of the representative */}

            <Input inputType={'email'}
                   title= {'Representative email: '}
                   name= {'email'}
                   value={this.state.newUser.repEmail}
                   placeholder = {'Enter the representative email'}
                   handleChange = {this.handleRepEmail}

            /> {/* Email of the user */}

            <Input inputType={'number'}
                   title= {'Representative Phone number: '}
                   name= {'phone'}
                   value={this.state.newUser.repPhone}
                   placeholder = {'Enter the company representative phone number'}
                   handleChange = {this.handleRepPhone}

            />{" "}{/* Phone of the user */}

          <TextArea
            title={'Reason for Nomination'}
            rows={10}
            value={this.state.newUser.about}
            name={'Reason for Nomination'}
            handleChange={this.handleTextArea}
            placeholder={'Please describe why this company should be considered for the award'}

          />{/* Idea Description */}


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