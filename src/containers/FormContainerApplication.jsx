import React, { useState, useEffect } from 'react';
import firebase from 'firebase'

/* Import Components */
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button'

const FormContainer = (props) => {

    useEffect(() => {
      const firebaseConfig = {
        apiKey: "AIzaSyCEiyIrLiy0HCVcSITYEJ56KJeSvaP7xXQ",
        authDomain: "michel-80bc2.firebaseapp.com",
        databaseURL: "https://michel-80bc2.firebaseio.com",
        projectId: "michel-80bc2",
        storageBucket: "michel-80bc2.appspot.com",
        messagingSenderId: "610545575100",
        appId: "1:610545575100:web:0933de959119e4b5abdcb9",
        measurementId: "G-S74MK2LYR7"
    };
    if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }
      firebase.database()
      .ref('applicationsCounter')
      .on('value', (data) => {
          console.log('value' + ' : ' + data.toJSON())
          let counter = data.toJSON()
          setCounter(counter+1)
      })
    })

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [support, setSupport] = useState('')
    const [counter, setCounter] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        email.length > 0 &&
            fetch('http://localhost:5000/sendMail', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    type: 'application',
                    email: email,
                    name: name,
                    phone: phone,
                    city: city,
                    description: description,
                    support: support,
                    counter: counter
                }),
            })
                .then(res => res.json())
                .then(res => alert(res))
                .then(  
                  firebase.database()
                .ref()
                .update({ 'applicationsCounter': counter }))
    } 

  const handleClearForm = (e) => {
  
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

    return (
        <form className="container-fluid" onSubmit={handleSubmit}>
           <h6 style={{display:"block", color:"black", position: "static"}}>Cleantech Romanian 2020 Awards Candidates form</h6>
            <Input inputType={'text'}
                   title= {'Applicant name: '}
                   name= {'name'}
                   value={name}
                   placeholder = {'Name of the person submitting the application'}
                  //  handleChange = {this.handleInput}
                  onChange={(e) => setName(e.target.value)} 
            />

            <Input inputType={'email'}
                   title= {'Applicant email: '}
                   name= {'email'}
                   value={email}
                   placeholder = {'Enter your email'}
                   onChange={(e) => setEmail(e.target.value)}

            /> 

            <Input inputType={'number'}
                   title= {'Applicant phone: '}
                   name= {'phone'}
                   value={phone}
                   placeholder = {'Enter your phone'}
                   onChange={(e) => setPhone(e.target.value)}
            />

            <Input inputType={'text'}
                   title= {'Enter your city: '}
                   name= {'city'}
                   value={city}
                   placeholder = {'Enter your city'}
                   onChange={(e) => setCity(e.target.value)}
            /> 

            <Input inputType={'text'}
                   title= {'Support: '}
                   name= {'email'}
                   value={support}
                   placeholder = {'Precise the support required'}
                   onChange={(e) => setSupport(e.target.value)}
            />

            <TextArea
              title={'Description:'}
              rows={10}
              value={description}
              name={'Description'}
              handleChange={(e) => setDescription(e.target.value)}
              placeholder={'Description'}
            />

          <Button 
              action = {handleSubmit}
              type = {'primary'} 
              title = {'Submit'} 
            style={buttonStyle}
          />
        </form>
    );
  }


const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer;