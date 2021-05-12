import React, { Component } from 'react'
import './fromdemo.css'
import Back from './feedback_back.png'
import Create from './create'

class Formdemo extends Component {
    state = {
        l: false,
        wide: window.innerWidth
    }
    size = () => {
        const change = () => {
            this.setState({
                wide: window.innerWidth
            })
        }
        window.addEventListener('resize', change, false)
    }
    componentDidMount() {
        this.size()
        setTimeout(() => {
            this.setState({ l: !this.state.l })

        }, 7000)
        setTimeout(() => {
            setInterval(() => {
                this.setState({ l: !this.state.l })
            }, 4000)
        }, 10000)
    }
    render() {
        return (
            <React.Fragment>
                <div className='calendarf'>
                    <div className="formwr">
                        <div className="formwrx">
                            <Create />
                        </div>
                    </div>
                    {this.state.wide >= 800 && <div className="sideform">
                        <div className="sideimgx">
                            <img src={'./uploads/f2.jpg'} alt='siig' className='siimg' />
                            <div className="sideximg">
                                <div style={{
                                    boxShadow: this.state.l === true ? `0px 65px 200px 80px rgba(252, 2, 2, 0.514),0px 1px 100px 40px rgb(255, 0, 0)` : ''
                                }} className="sdv"></div>
                                <div style={{
                                    boxShadow: this.state.l === true ? `0px 65px 200px 80px rgba(252, 2, 2, 0.514),0px 1px 100px 40px rgb(255, 0, 0)` : ''
                                }} className="sdv1"></div>
                            </div>
                        </div>




                    </div>}



                    <div onClick={() => this.props.history.push('./')} className='back'>
                        <img src={Back} alt='back' className='bckimg' />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Formdemo;