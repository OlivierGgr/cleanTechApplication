import React, { Component } from 'react';
import './App.css';
import Logo from './components/assets/logo.png';
import Modal from './components/modal/modal'

class App extends Component {
  render() {
    return (
      <div>
      <div className='menubar'></div>
      <div className='half1'>
        <div className='half2'>
          <div className='div-container'>
            <div className='imgsus'>
              <div className='logo'> <img className='logoct' src={Logo} alt='logo'></img></div>
              <h2>2020 Cleantech Romania Nominations</h2><br></br>
              <h6>Your opportunity to tell us about the innovators with cleantech<br/> impact on Romanian market.</h6>
              <Modal/>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default App;
