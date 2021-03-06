import React, { useState, useEffect, useRef } from 'react';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button'

const FormContainerNomination = (props) => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [counter, setCounter] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyWebsite, setCompanyWebsite] = useState('')
  const [contactPerson, setContactPerson] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [companyPhone, setCompanyPhone] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    email.length > 0 &&
      fetch('https://afternoon-stream-92743.herokuapp.com/feature/counter/nominations', {
        method: 'GET'
      })
        .then(res => res.json())
        .then(res => {
          setCounter(res)
        })
  }

  // USING useEffect ON UPDATE ONLY
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      fetch('https://afternoon-stream-92743.herokuapp.com/feature/sendMail', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          type: 'nomination',
          email: email,
          name: name,
          phone: phone,
          company: {
            name: companyName,
            website: companyWebsite,
            contactPerson: contactPerson,
            email: companyEmail,
            phone: companyPhone,
            reason: reason
          },
          counter: counter
        }),
      })
        .then(res => res.json())
        .then(res => alert(res))
    }
  }, [counter])

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <h6 style={{ display: "block", color: "black", position: "static" }}> Cleantech Romanian 2020 Awards Application form</h6>
      <Input inputType={'text'}
        title={'Name: '}
        name={'name'}
        value={name}
        placeholder={'Name of the person submitting the application'}
        //  handleChange = {this.handleInput}
        onChange={(e) => setName(e.target.value)}
      />

      <Input inputType={'email'}
        title={'Email: '}
        name={'email'}
        value={email}
        placeholder={'Enter your email'}
        onChange={(e) => setEmail(e.target.value)}

      />

      <Input inputType={'number'}
        title={'Phone number: '}
        name={'phone'}
        value={phone}
        placeholder={'Enter your phone'}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Input inputType={'text'}
        title={'Company name: '}
        name={'companyName'}
        value={companyName}
        placeholder={'Enter here the name of the company you wish to nominate'}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <Input inputType={'text'}
        title={'Company website: '}
        name={'companyWebsite'}
        value={companyWebsite}
        placeholder={'Enter here the website of the company you wish to nominate'}
        onChange={(e) => setCompanyWebsite(e.target.value)}
      />

      <Input inputType={'text'}
        title={'Contact person from the company: '}
        name={'contactPerson'}
        value={contactPerson}
        placeholder={'Enter here the contact person of the company you wish to nominate'}
        onChange={(e) => setContactPerson(e.target.value)}
      />

      <Input inputType={'email'}
        title={'Company email: '}
        name={'companyEmail'}
        value={companyEmail}
        placeholder={'Enter here the email of the company you wish to nominate'}
        onChange={(e) => setCompanyEmail(e.target.value)}
      />

      <Input inputType={'number'}
        title={'Company phone number: '}
        name={'companyPhone'}
        value={companyPhone}
        placeholder={'Enter here the phone number of the company you wish to nominate'}
        onChange={(e) => setCompanyPhone(e.target.value)}
      />

      <TextArea
        title={'Reason for nomination:'}
        rows={10}
        value={reason}
        name={'reason'}
        handleChange={(e) => setReason(e.target.value)}
        placeholder={'Reason for nomination'}
      />

      <Button
        action={handleSubmit}
        type={'primary'}
        title={'Apply'}
        style={buttonStyle}
      />
    </form>
  );
}


const buttonStyle = {
  margin: '10px 10px 10px 10px'
}

export default FormContainerNomination;