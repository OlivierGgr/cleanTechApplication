import React from 'react';
import './modal.css'
import FormContainer from '../../containers/FormContainer';


class Modal extends React.Component {

    render() {
        return (
            <div className='container-btn'>
                <div className="modal-container">
                    <input id="modal-toggle" type="checkbox" />
                    <button className='button-1' >
                        <h5>Application</h5>
                        <p>If you have an cleantech idea that you’d like to turn into a project, please apply here. Send us an email specifying briefly :
                            <li>the cleantech idea/ project</li>
                            <li>the support you need (financial, operational, etc.)</li>
                            <li>providing contact details where we can contact you</li>
                        </p>
                        <a>Click here!</a>
                    </button>
                    <div className="modal-backdrop">
                        <div className="modal-content">
                            
                            <FormContainer />
                            {/* <label class="modal-close button" for="modal-toggle">Close</label> */}
                        </div>
                    </div>
                </div>

                <div className="modal-container2">
                    <input id="modal-toggle" type="checkbox" />
                    <button className='button-2'>
                        <h5>Nomination</h5>
                        <p>If you know a Romanian Company or a Foreign Company with offices in Romaniawhat you believe is a model for cleantech technologies put in practice, please fill in the form below and send the nomination for Cleantech Romania 2020 Awards. It can very well be you company or the company you work for.
                        </p>
                        <a>Click here!</a>
                    </button>
                    <div className="modal-backdrop">
                        <div className="modal-content">
                            <FormContainer />
                            {/* <label class="modal-close button" for="modal-toggle">Close</label> */}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Modal;