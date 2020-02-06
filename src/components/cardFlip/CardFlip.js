import React from 'react';
import './CardFlip.css'
// import ReactCardFlip from 'react-card-flip';

class CardFlip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen = () => {
        this.setState({ open: !this.state.open });
    };

    getForms = () => (
        <div className="forms">
            {/* <input className='imp'  type="text" />
            <input className='imp' type="text" />
            <input className='imp' type="text" /> */}
        </div>
    )

    render() {
        return (
            <div>
                <div className="cardFlip">
                    <div className={!this.state.open ? "front" : "back"} >{!this.state.open ? 'Click to flip' : this.getForms()}
                    <button className='btn-flip' onClick={this.handleOpen}>Click!</button>
                    </div>

                    {/* <div className={!this.state.open?"face back backclick":"face back"} onClick={this.handleClose}><h1>Yo, what up?</h1></div> */}
                </div>
            </div>
        )
    }
}

export default CardFlip;