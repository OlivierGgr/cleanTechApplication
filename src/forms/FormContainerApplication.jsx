import React, { useState, useEffect, useRef } from 'react';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button'

const FormContainer = (props) => {

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
      fetch('https://afternoon-stream-92743.herokuapp.com/feature/counter/applications', {
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
    }
  }, [counter])

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <h6 style={{ display: "block", color: "black", position: "static" }}>Cleantech Romanian 2020 Awards Candidates form</h6>
      <Input inputType={'text'}
        title={'Applicant name: '}
        name={'name'}
        value={name}
        placeholder={'Name of the person submitting the application'}
        //  handleChange = {this.handleInput}
        onChange={(e) => setName(e.target.value)}
      />

      <Input inputType={'email'}
        title={'Applicant email: '}
        name={'email'}
        value={email}
        placeholder={'Enter your email'}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input inputType={'number'}
        title={'Applicant phone: '}
        name={'phone'}
        value={phone}
        placeholder={'Enter your phone'}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Input inputType={'text'}
        title={'Enter your city: '}
        name={'city'}
        value={city}
        placeholder={'Enter your city'}
        onChange={(e) => setCity(e.target.value)}
      />

      <Input inputType={'text'}
        title={'Support: '}
        name={'email'}
        value={support}
        placeholder={'Precise the support required'}
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
        action={handleSubmit}
        type={'primary'}
        title={'Submit'}
        style={buttonStyle}
      />
    </form>
  );
}

const buttonStyle = {
  margin: '10px 10px 10px 10px'
}

export default FormContainer;